import React from 'react'

export const Repos = () => {
	return (
		<div>{
			[].map((repo, index) => (
				<div key={index} className='resume__repository'>
					<p>{repo.name}</p>
					<a href={repo.link} target='_blank' rel='noreferrer'>Link</a>
				</div>
			))
		}</div>
	)
}
