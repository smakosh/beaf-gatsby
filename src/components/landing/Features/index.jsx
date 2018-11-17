import React from 'react'
import { Container } from 'Common'
import haircut from 'Static/haircut.png'
import photography from 'Static/photography.png'
import form from 'Static/form.png'
import { Wrapper, Content, Item } from './styles'

const Features = () => (
	<Wrapper as={Container}>
		<Content>
			<Item>
				<img src={haircut} alt="haircut" />
				<h4>wether you're getting a new haircut</h4>
			</Item>
			<Item>
				<img src={photography} alt="photography" />
				<h4>Or you're not sure which shot you think people would love more</h4>
			</Item>
			<Item>
				<img src={form} alt="form" />
				<h4>Easy to share, awesome UX!</h4>
			</Item>
		</Content>
	</Wrapper>
)

export { Features }
