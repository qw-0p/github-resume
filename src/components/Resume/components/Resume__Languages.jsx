import { BarChart } from '@mui/x-charts'
import React from 'react'

export const Languages = ({languages}) => {
	const xAxisData = Object.keys(languages);
	const values = Object.values(languages);

	// Разделение значений для примера на три серии

	return (
		<div style={{ padding: '50px' }}>
			{
				languages && Object.entries(languages).map(([key, value]) => (
					<div key={key}>
						<p>{key}</p>
						<p>{value}</p>

					</div>
				))
			}
			<div >
				<BarChart
					style={{ width: '100%', height: 800, marginLeft: '50px' }}
					borderRadius={10}
					xAxis={[
						{
							scaleType: 'band',
							data: xAxisData
						}
					]}
					series={[
						{
							data: values
						}
					]}
					width={800}
					height={500}
				/>
			</div>
		</div>
	)
}
