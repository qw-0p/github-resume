import {useEffect, useMemo, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Resume__Header'
import { Profile } from './Resume__Profile'
import { Repos } from './Resume__Repos'
import { Languages } from './Resume__Languages'
import { Core } from '../../functions'

export const Resume = () => {
	const [error, setError] = useState(false)
	const [user, setUser] = useState({})
	const location = useLocation()
	const core = useMemo(() => new Core(location.pathname.slice(1)), [location.pathname])


	useEffect(() => {
		const fetchData = async () => {
			const response = await core.getUser()
			
			setUser(response)
		}

		fetchData().catch(error => {
			setError(error)
		})

	}, [core])

	
	if (error) {
		return <p>User not found</p>
	}

	return (
		<div className='resume'>
			<section className='resume__header'>
				<Header {...user} />
			</section>
			<section className='resume__profile'>
				<Profile {...user} />

			</section>
			<section className='resume__languages'>
				<Languages />
			</section>
			<section className='resume__repositories'>
				<Repos />
			</section>
		</div>
	)
}
