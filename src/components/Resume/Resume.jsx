import {useEffect, useMemo, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Resume__Header'
import { Profile } from './Resume__Profile'
import { Repos } from './Resume__Repos'
import { Languages } from './Resume__Languages'
import { Core } from '../../functions'

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
			<section className='resume__profile'>
				<Profile {...data.user} />

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
