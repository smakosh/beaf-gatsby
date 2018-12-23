import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import Copyrights from './Copyrights'
import { FullContainer, List, Brand, Social, Wrapper } from './styles'
// import Twitter from './assets/twitter.svg'
import Facebook from './assets/facebook.svg'
import Instagram from './assets/instagram.svg'

const Footer = () => {
  const social = [
    /* {
      id: 0,
			name: 'Twitter',
			icon: Twitter,
      link: 'https://twitter.com/smakosh',
      last: false,
    }, */
    {
      id: 0,
      name: 'Facebook',
      icon: Facebook,
      link: 'https://www.facebook.com/Beaf-1027644994104292',
      last: false,
    },
    {
      id: 1,
      name: 'Instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/beafapp/',
      last: false,
    },
  ]
  return (
    <Fragment>
      <FullContainer>
        <Wrapper as={Container}>
          <List>
            <Brand as={Link} to="/">
              BEAF
            </Brand>
          </List>
          <List>
            <a href="https://app.beafapp.com/">App</a>
            <a href="https://app.beafapp.com/login">Login</a>
            <a href="https://app.beafapp.com/register">Register</a>
          </List>
          <List>
            Follow Us
            {social.map(({ id, name, icon, link, last }) => (
              <Social
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`follow me on ${name}`}
                href={link}
                last={last}
              >
                <img width="24" src={icon} alt={name} />
              </Social>
            ))}
          </List>
        </Wrapper>
      </FullContainer>
      <Copyrights />
    </Fragment>
  )
}

export { Footer }
