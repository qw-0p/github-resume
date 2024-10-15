import { Grid2 as Grid, Paper } from '@mui/material';
import React, { useMemo } from 'react'

export const Languages = ({ languages }) => {
	
	const procentage = useMemo(() => {
		const total = Object.values(languages).reduce((sum, value) => sum + value, 0);
		const percentageData = {};

		for (const [language, count] of Object.entries(languages)) {
			const percentage = (count / total * 100).toFixed(2);
			percentageData[language] = `${percentage}%`;
		}

		return percentageData;
	}, [languages])

	return (
		<div className='container resume__languages'>
			<Grid style={{display: 'flex',
				justifyContent: 'center', marginTop: '20px',
				}} container spacing={2}>
				{
					languages && Object.entries(languages).map(([key, value]) => (
						<Grid size="auto" key={key}>
							<Paper sx={{ padding: '10px', width: '200px' }}>
								<div style={{
									display: 'flex',
									justifyContent: 'space-between'
								}}>
									<p>{key}</p>
									<p>{procentage[key]}</p>
								</div>
								<div style={{display: 'flex',
								justifyContent: 'space-between'}}>
									<p>Bytes: </p>
									<p style={{ color: 'green' }}>{value}</p>
									
								</div>
							</Paper>

						</Grid>
					))
				}
			</Grid>
		</div>
	)
}
