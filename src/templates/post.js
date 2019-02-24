import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'Common'
import { Content } from 'Components/article'

export default ({
  data: {
    post: {
      html,
      timeToRead,
      frontmatter: { title, date, slug, thumbnail },
    },
  },
}) => (
  <Layout>
    <SEO
      type="NewsArticle"
      title={title}
      articleBody={html}
      datePublished={date}
      dateModified={date}
      cover={thumbnail.childImageSharp.fluid.originalImg}
      location={slug}
    />
    <Content title={title} content={html} date={date} timeToRead={timeToRead} />
  </Layout>
)

export const postQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
					childImageSharp {
						fluid(maxWidth: 700) {
							originalImg
						}
					}
				}
      }
    }
  }
`
