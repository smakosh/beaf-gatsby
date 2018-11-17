import React from 'react'
import { Container, Button } from 'Common'
import aboutIcon from 'Static/illustrations/about.svg'
import { Wrapper, Item, Content } from './styles'

const About = () => (
	<Wrapper as={Container}>
		<Item>
			<img
				src={aboutIcon}
				alt="about illustration"
				style={{ marginBottom: 0 }}
			/>
		</Item>
		<Item as={Content}>
			<h2>BEAF</h2>
			<p>Share your Before & After moments with the people you love and get unbiased real feedback! It's for free and forever</p>
			<Button as="a" href="https://beafapp.netlify.com/register">Register</Button>
			<Button secondary as="a" href="https://beafapp.netlify.com/">Login</Button>
		</Item>
	</Wrapper>
)

export { About }
