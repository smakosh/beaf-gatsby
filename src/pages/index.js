import React from 'react'
import { Layout, SEO } from 'Common'
import { About } from 'Landing'

const IndexPage = () => (
  <Layout>
    <SEO title="BEAF - The community platform for making decisions!" />
    <About />
    {/* <Features /> */}
  </Layout>
)

export default IndexPage
