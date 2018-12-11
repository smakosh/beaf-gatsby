import React from 'react'
import { Container, Subscribe } from 'Common'
import aboutIcon from 'Static/illustrations/about.svg'
import { Wrapper, Item, Content } from './styles'

const About = () => (
	<Wrapper as={Container}>
		<Item as={Content}>
			<h5>Poll votes are boring <span role="img" aria-label="mind blown">🤯</span></h5>
			<h1>Join Beaf & take your
				audience engagement to
				the next level!</h1>
			<Subscribe />
		</Item>
		<Item>
			<img
				src={aboutIcon}
				alt="about illustration"
				style={{ marginBottom: 0 }}
			/>
		</Item>
	</Wrapper>
)

export { About }
