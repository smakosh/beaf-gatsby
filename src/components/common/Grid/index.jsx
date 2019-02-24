import React from 'react'
import { Card } from 'Common'
import { Flex } from './styles'

export const Grid = ({ data }) => (
  <Flex>
    {data.map(
      ({
        node: {
          id,
          excerpt,
          timeToRead,
          frontmatter: { title, slug, thumbnail, date },
        },
      }) => (
        <Card
          key={id}
          description={excerpt}
          title={title}
          slug={slug}
          thumbnail={thumbnail}
          date={date}
          timeToRead={timeToRead}
        />
      )
    )}
  </Flex>
)
