import { useNavigate } from "react-router-dom";

import { Box, Button, Container, Input } from "@mui/material";

export const Home = () => {
	const navigate = useNavigate();
	

	const handleOnSubmit = (e) => {
		e.preventDefault()
		navigate(`/${e.target.elements.username.value}`)
	}


	return (
		<Container className='home'>
			<Box>
			<h1>GitHub Resume</h1>
				<p>Enter your details to view your resume</p>
			<form className='home__form' onSubmit={handleOnSubmit}>
				<Input
					size="large"
					className='home__input'
					type='text'
					name='username'
					placeholder='Search resume'
				/>
					<Button variant="contained" type='submit' className='home__button'>Search</Button>
				</form>
			</Box>
		</Container>
	)
}
