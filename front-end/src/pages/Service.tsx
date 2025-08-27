import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const Service:FC = () => {
  return (
		<Container>
			<Title>Terms of Service</Title>
			
		</Container>
  );
}

export default Service;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;