import React, { Fragment } from 'react'
import './layout.css'
import { Header, Footer } from 'Theme'
import { Subscribe } from 'Common'
import { GlobalStyle } from './styles'

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<GlobalStyle />
		{children}
		<Subscribe />
		<Footer />
	</Fragment>
)

export { Layout }
