import React, { useEffect } from 'react'

export const Languages = ({languages}) => {
	return (
		<div>
			{
				languages &&Object.entries(languages).map(([key, value]) => (
					<div key={key}>
						<p>{key}</p>
						<p>{value}</p>
					</div>
				))
			}
		</div>
	)
}
