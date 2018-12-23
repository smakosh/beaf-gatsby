import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #ff6347;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  transition: all 0.15s ease;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ subscribe }) =>
    subscribe &&
    `
        border-radius: 0 5px 5px 0;
        height: 48px;
        background: #191847;
        width: 100%;
        max-width: 30%;
        flex: 1 auto;

        @media (max-width: 1350px) {
            max-width: 45%;
        }

        @media (max-width: 680px) {
            max-width: 100%;
            border-radius: 5px;
        }
    `}
`
