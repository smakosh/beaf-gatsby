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

    &:first-child {
      margin-bottom: 2rem;
    }
  }
`

export const Content = styled.div`
  padding-top: 3rem;

  @media (max-width: 960px) {
    text-align: center;
  }

  h5 {
    color: #A7A6A6;
    font-size: 18pt;
    margin-bottom: .4rem;
    font-weight: normal;
  }

  h1 {
    color: #191847;
    font-weight: normal;
    font-size: 36pt;
    line-height: 1.2;

    @media (max-width: 1200px) {
      font-size: 32pt;
    }

    @media (max-width: 960px) {
      font-size: 26pt;
    }
  }
`
