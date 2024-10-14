import { useNavigate } from "react-router-dom";
import './style.scss'
import { Button, Input } from "@mui/material";

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
				<Input
					className='home__input'
					type='text'
					name='username'
					placeholder='Search resume'
				/>
				<Button variant="contained" className='home__button'>Search</Button>
			</form>
		</main>
	)
}
