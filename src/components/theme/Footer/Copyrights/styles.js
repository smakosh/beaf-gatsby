import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: .5rem 0;
	text-align: center;
	font-size: 10pt;
`

export const Links = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Item = styled.img`
	margin: 0 .2rem;
`
