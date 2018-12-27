import React from 'react'
import { Container, Subscribe } from 'Common'
import aboutIcon from 'Static/illustrations/about.svg'
import { Wrapper, Item, Content } from './styles'

const About = () => (
  <Wrapper as={Container}>
    <Item as={Content}>
      <h1>Join the community platform for making decisions!</h1>
      <ul>
        <li>Need help to decide the phone you should get?</li>
        <li>Not sure of choices you should take?</li>
        <li>
          Or you just like to motivate others through your transformation wether
          it was mentally or physically, Beaf is just the right place to achieve
          that!
        </li>
      </ul>
      <Subscribe />
    </Item>
    <Item>
      <img
        src={aboutIcon}
        alt="about illustration"
        style={{ marginBottom: 0 }}
      />
    </Item>
  </Wrapper>
)

export { About }
