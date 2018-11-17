import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import logo from 'Static/logo.svg'
import NavbarLinks from '../NavbarLinks'
import { Brand, Wrapper, Logo } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Brand as={Link} to="/">
			<Logo src={logo} alt="logo" />
			BE<span>AF</span>
		</Brand>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
