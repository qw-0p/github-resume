import React from 'react'

export const Profile = ({followers, created, repos, login}) => {
	return (
		<div>
			<p>Owner: { login }</p>
			<p>Have: {followers} followers and published {repos} repositories </p>
			<p>Registered: {created} </p>
		</div>
	)
}
