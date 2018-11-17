import React from 'react'
import { Link } from 'gatsby'
import { Links } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Links desktop={desktop}>
		<Link to="/" activeClassName="current">Home</Link>
		<a href="https://beafapp.netlify.com/">Login</a>
		<a href="https://beafapp.netlify.com/register">Register</a>
	</Links>
)

export default NavbarLinks