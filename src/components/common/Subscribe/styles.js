import styled from 'styled-components'

export const Message = styled.h4`
	margin: 1rem 0;
	font-weight: normal;

	@media (max-width: 800px) {
        font-size: .9em;
        width: 90%;
        margin: 1rem auto;
	}
`

export const Error = styled.div`
    color: red;

    ${({ server }) => server && `
        margin-top: 1rem;
    `}
`

export const Label = styled.div`
	padding: .5rem 0;

	p {
		font-size: 12pt;
		color: #777777;

		a {
			text-decoration: underline;
			color: #2B85FF;
		}
	}
`

export const Fields = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Input = styled.input`
	padding: .5rem;
	border: 2px solid #191847;
	border-radius: 5px 0 0 5px;
	width: 100%;
	max-width: 70%;
	flex: 1 auto;
	box-sizing: border-box;

	${({ error }) => error && `
		border-color: #e53935;
	`}

	@media (max-width: 1350px) {
			max-width: 55%;
	}

	@media (max-width: 960px) {
		max-width: 100%;
		margin-bottom: 1rem;
		border-radius: 5px;
	}
`
