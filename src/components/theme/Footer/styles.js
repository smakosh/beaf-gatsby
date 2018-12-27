import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

export const FullContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  color: #fff;
  background: #2e2d4e;
`

export const List = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: unset;
    }
  }

  a {
    color: #fff;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
`

export const Social = styled.a`
  color: #fff;

  img {
    margin-bottom: 0;
  }

  ${({ last }) =>
    last &&
    `
		margin-right: unset;
	`}
`
