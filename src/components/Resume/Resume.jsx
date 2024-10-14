import {useEffect, useMemo, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Header, Repos, Languages } from './components'
import { Core } from '../../functions'
import './style.scss'

export const Resume = () => {
	const [error, setError] = useState(false)
	const [data, setData] = useState({
		user: {},
		repos: [],
		languages: [],	
	})
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
		<div className='resume'>
			<section className='resume__header'>
				<Header {...data.user} />
			</section>
			<section className='resume__languages'>
				<Languages languages={data.languages} />
			</section>
			<section className='resume__repositories'>
				<Repos repos={data.repos} />
			</section>
		</div>
	)
}
