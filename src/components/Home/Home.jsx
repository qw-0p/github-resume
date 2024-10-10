import { useNavigate } from "react-router-dom";
import './style.scss'

export const Home = () => {
	const navigate = useNavigate();
	

	const handleOnSubmit = (e) => {
		e.preventDefault()
		navigate(`/${e.target.elements.username.value}`)
	}


	return (
		<main className='home'>
			<h1>GitHub Resume</h1>
			<p>Enter your details to view your resume</p>
			<form className='home__form' onSubmit={handleOnSubmit}>
				<input
					className='home__input'
					type='text'
					name='username'
					placeholder='Search resume'
				/>
				<button className='home__button'>Search</button>
			</form>
		</main>
	)
}
