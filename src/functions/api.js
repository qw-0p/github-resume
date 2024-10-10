import { Octokit } from '@octokit/core'


const octokit = new Octokit({
	auth: process.env.GITHUB_ACCESS_TOKEN
})

export const request = (path) => {
	
	return octokit.request(`GET ${path}`, {
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		}
	})
}