import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { SidebarContainer } from './styles'

const Sidebar = ({ sidebar, toggle }) => (
	<SidebarContainer active={sidebar} onClick={toggle}>
		<NavbarLinks />
	</SidebarContainer>
)

export default Sidebar
