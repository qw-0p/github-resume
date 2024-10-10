import React from 'react'

export const Repos = ({ repos }) => {
	console.log(repos);
	
	return (
		<div>{
			repos.map((repo, index) => (
				<div key={index}>
					<a href={repo.link} target='_blank' rel='noreferrer'>{repo.name}</a>
					<p>Created At:{repo.created}</p>
					<p>Updated At:{repo.updated}</p>
				</div>
			))
		}</div>
	)
}
