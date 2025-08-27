import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const ReturnRefundPolicy:FC = () => {
  return (
		<Container>
			<Title>Return & Refund Policy</Title>
			
		</Container>
  );
}

export default ReturnRefundPolicy;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;