import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import Copyrights from './Copyrights'
import {
	FooterContainer,
	FullContainer,
	List,
	Brand,
	Social,
	Wrapper
} from './styles'

const Footer = () => {
	const social = [
		{
			id: 0,
			name: 'Twitter',
			link: 'https://twitter.com/smakosh',
			last: false
		},
		{
			id: 1,
			name: 'Github',
			link: 'https://github.com/smakosh',
			last: false
		},
		{
			id: 2,
			name: 'Instagram',
			link: 'https://instagram.com/smakosh19',
			last: false
		}
	]
	return (
		<FooterContainer>
			<FullContainer>
				<Wrapper as={Container}>
					<List>
						<li>
							<Brand as={Link} to="/">
										BEAF
							</Brand>
						</li>
					</List>
					<List>
						<li><a href="https://beafapp.netlify.com/">Login</a></li>
						<li><a href="https://beafapp.netlify.com/register">Register</a></li>
					</List>
					<List>
						<li>Follow me on</li>
						<li>
							{social.map(({ id, name, link, last }) => (
								<Social key={id} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`} href={link} last={last}>
									{name}
								</Social>
							))}
						</li>
					</List>
				</Wrapper>
			</FullContainer>
			<Copyrights />
		</FooterContainer>
	)
}

export { Footer }
