import React from 'react'
import './layout.css'
import { Header, Footer } from 'Theme'
import { GlobalStyle, Wrapper } from './styles'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
)
