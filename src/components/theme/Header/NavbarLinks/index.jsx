import React from 'react'
import { Links } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Links desktop={desktop}>
		<a href="https://app.beafapp.com/">App</a>
		<a href="https://app.beafapp.com/login">Login</a>
		<a href="https://app.beafapp.com/register">Register</a>
	</Links>
)

export default NavbarLinks
