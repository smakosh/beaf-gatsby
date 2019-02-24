import React from 'react'
import { Container, Grid } from 'Common'
import { Wrapper } from './styles'

export const Articles = ({ posts }) => (
  <Wrapper as={Container}>
    <h2>Latest posts</h2>
    <Grid data={posts} />
  </Wrapper>
)
