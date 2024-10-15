import { Grid2 as Grid, Paper,  } from '@mui/material'
import React from 'react'

export const Repos = ({ repos }) => {
	
	return (
		<div className='container'>
			<Grid container style={{
				display: 'flex',
				justifyContent: 'center', marginTop: '20px',
			}}  spacing={2}>
			{
			repos && repos.map((repo, index) => (
				<Grid key={index}>
					<Paper sx={{ padding: '10px', width: '300px' }}>
						<a href={repo.link} target='_blank' rel='noreferrer'>{repo.name}</a>
						<p>Created At: {repo.created}</p>
						<p>Updated At: {repo.updated}</p>
					</Paper>
				</Grid>
			))
					
				}
			</Grid>
		</div>
	)
}
