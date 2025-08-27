import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const Account:FC = () => {
  return (
		<Container>
			<Title>Account</Title>
			
		</Container>
  );
}

export default Account;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;