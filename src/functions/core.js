import { request } from "./api";
import { formatDate } from "./formatDate";

export class Core {
	constructor(username) {
		this.username = username
		this.repositories = [];
	}

	async getUser() {
		const response = (await request(`/users/${this.username}`)).data
		return {
			login: response.login,
			avatar: response.avatar_url || null,
			name: response.name || null,
			bio: response.bio || null,
			repos: response.public_repos,
			followers: response.followers,
			created: formatDate(String(response.created_at)),
		}
	}

	async getRepos() {
		try {
			this.repositories = (await request(`/users/${this.username}/repos`)).data
			const sortedRepos = this.sortedRepositories().slice(0, 10)

			return sortedRepos.map(repo => ({
				name: repo.name,
				description: repo.description || null,
				language: repo.language || null,
				stars: repo.stargazers_count,
				link: repo.html_url
			}))
		} catch (error) {
			console.error("Error:", error);
		}
	}

	async getLanguages() {
		try {
			let languageStats = {};
			if (this.repositories.length === 0) return null;

			const languagePromises = this.repositories.map(repo =>
				request(`/repos/${this.username}/${repo.name}/languages`)
			);

			const languagesResults = await Promise.all(languagePromises);

			languagesResults.forEach(({ data: languages }) => {
				for (const [language, bytes] of Object.entries(languages)) {
					if (!languageStats[language]) {
						languageStats[language] = 0;
					}
					languageStats[language] += bytes;
				}
			});
			return languageStats
		} catch (error) {
			console.error("Error:", error);
		}
	}


	sortedRepositories() {
		if (!this.repositories) {
			return [];
		}
		return this.repositories.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
	}
}
