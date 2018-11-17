import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	@media (max-width: 680px) {
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}
`

export const FooterContainer = styled.footer`
	margin-top: 6rem;
`

export const FullContainer = styled.div`
	width: 100%;
	padding: 8rem 0 2rem 0;
	color: #fff;
	background-image: linear-gradient(10deg,#ff6347 0%,#ec9819 100%);
`

export const List = styled.ul`
	list-style: none;
	align-self: center;

	a {
		color: #fff;
	}
`

export const Brand = styled.div`
	display: flex;
	align-items: center;
`

export const Social = styled.a`
	margin-right: 1rem;
	color: #fff;

	${({ last }) => last && `
		margin-right: unset;
	`}
`
