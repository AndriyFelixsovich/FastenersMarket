import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const About:FC = () => {
  return (
		<Container>
			<Title>About</Title>
			
		</Container>
  );
}

export default About;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;