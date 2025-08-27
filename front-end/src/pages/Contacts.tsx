import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const Contacts:FC = () => {
  return (
		<Container>
			<Title>Contacts</Title>
			
		</Container>
  );
}

export default Contacts;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;