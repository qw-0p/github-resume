import React from 'react'

export const Header = ({avatar, name, login, followers, created, repos}) => {
	return (
		<div className='header resume__header container'>
			<img className='header__avatar' src={avatar} alt={name} />
			<div className='header__info'>
				<h1 className='header__name'>{name}</h1>
				<p>Nickname: {login}</p>
				<p>Have: {followers} followers and published {repos} repositories </p>
				<p>Registered: {created} </p>
			</div>
		</div>
	)
}
