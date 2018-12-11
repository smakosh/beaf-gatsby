import React from 'react'
import { Layout, SEO } from 'Common'
import { About } from 'Landing'

const IndexPage = () => (
	<Layout>
		<SEO title="BEAF - Share your wonderful before/after moments with the people you love!" />
		<About />
		{/* <Features /> */}
	</Layout>
)

export default IndexPage
