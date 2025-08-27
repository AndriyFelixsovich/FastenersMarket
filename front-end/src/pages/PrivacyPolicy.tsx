import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const PrivacyPolicy:FC = () => {
  return (
		<Container>
			<Title>Privacy Policy</Title>
			
		</Container>
  );
}

export default PrivacyPolicy;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;