import React, { useEffect } from 'react'

export const Languages = () => {
	return (
		<div>
			{
				Object.entries([]).map(([key, value]) => (
					<div key={key}>
						<p>{key}</p>
						<p>{value}</p>
					</div>
				))
			}
		</div>
	)
}
