import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8rem 0;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Item = styled.div`
  width: 100%;
  max-width: 48%;
  
  @media (max-width: 960px) {
    max-width: 100%;
  }
`

export const Content = styled.div`
  padding-top: 3rem;

  h2 {
    color: #000;
    font-weight: bold;
    font-size: 36pt;
    letter-spacing: .2em;
  }

  p {
    color: #A7A6A6;
    font-size: 20pt;
    line-height: 1.7;
  }
`
