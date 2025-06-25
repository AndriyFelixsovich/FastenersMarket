import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '@/components/Ui/Container';

const Page404:FC = () => {
  return (
		<Container>
			<PageWrap>
				<h1>Oops, page not found &#128565;</h1>
				<Link to="/">Go home</Link>
			</PageWrap>
		</Container>
  );
}

export default Page404;


const PageWrap = styled.div `
	margin: 1.5rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;