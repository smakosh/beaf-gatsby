import styled from 'styled-components'

export const Button = styled.button`
    padding: .5rem 1.5rem;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    background: #FF6347;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    transition: all .15s ease;
    border: none;
    -webkit-appearance:none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;

    ${({ secondary }) => secondary && `
        background: #536DFE;
        margin-left: 1rem;
    `}

    &:focus {
        outline: none;
    }

    &:disabled {
        background: gray;
    }

    ${({ subscribe }) => subscribe && `
        flex: 1;
        border-radius: 6px;
        margin-left: 1rem;
        height: 48px;

        @media (max-width: 800px) {
            flex: unset;
            margin: 0 auto;
        }
    `}
`
