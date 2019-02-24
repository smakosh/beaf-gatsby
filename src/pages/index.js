import React from 'react'
import { Layout, SEO } from 'Common'
import { About, Articles } from 'Landing'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 20
        ) {
          edges {
            node {
              excerpt(pruneLength: 230)
              id
              timeToRead
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                slug
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 630) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ posts: { edges } }) => (
      <Layout>
        <SEO
          title="The community platform for making decisions!"
          type="Organization"
        />
        <About />
        {/* <Features /> */}
        <Articles posts={edges} />
      </Layout>
    )}
  />
)
