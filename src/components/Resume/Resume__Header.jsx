import React from 'react'

export const Header = ({avatar, name}) => {
	return (
		<div>
			<img src={avatar} alt={name} />
			<h1 className='resume__name'>{name}</h1>
		</div>
	)
}
