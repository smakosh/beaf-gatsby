import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { StyledHeader, Overlay } from './styles'

const Head = ({ sidebar, toggle }) => (
	<StyledHeader>
		<Overlay sidebar={sidebar} onClick={toggle} />
		<Navbar />
		<Hamburger sidebar={sidebar} toggle={toggle} />
		<Sidebar sidebar={sidebar} toggle={toggle} />
	</StyledHeader>
)

const enhance = compose(
	withStateHandlers(
		() => ({ sidebar: false, isHomePage: false }),
		{
			toggle: ({ sidebar }) => () => ({ sidebar: !sidebar }),
			setHomePage: ({ isHomePage }) => () => ({ isHomePage: !isHomePage })
		}
	)
)

export const Header = enhance(Head)
