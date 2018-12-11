import React, { Fragment } from 'react'
import './layout.css'
import { Header, Footer } from 'Theme'
import { GlobalStyle } from './styles'

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<GlobalStyle />
		{children}
		<Footer />
	</Fragment>
)

export { Layout }
