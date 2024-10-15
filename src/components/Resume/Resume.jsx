import {useEffect, useMemo, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Header, Repos, Languages } from './components'
import { Core } from '../../functions'
import { Box, Container } from '@mui/material'

export const Resume = () => {
	const [error, setError] = useState(false)
	const [data, setData] = useState({
		user: {},
		repos: [],
		languages: [],	
	})
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const core = useMemo(() => new Core(location.pathname.slice(1)), [location.pathname])

	useEffect(() => {
		const fetchData = async () => {

			//I dont use promise.all/allSettled because I need to catch every errors
			try {
				const user = await core.getUser();
				setData(prev => ({ ...prev, user }));

				const repos = await core.getRepos();
				setData(prev => ({ ...prev, repos }));

				const languages = await core.getLanguages();
				setData(prev => ({ ...prev, languages }));

			} catch (error) {
				setError(error.status);
				console.error("Error fetching data:", error.message);
			}
		};
		fetchData();
	}, [core]);

	
	if (error === 404) {
		return <p>User not found</p>
	} else if (error === 403) {
		return <p>Something went wrong</p>
	}

	return (
		<Container fixed disableGutters className='resume'>
			<Box>
				<Header {...data.user} />
			</Box>
			<Box>
				<Languages languages={data.languages} />
			</Box>
			<Box>
				<Repos repos={data.repos} />
			</Box>
		</Container>
	)
}
