import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';

const ShippingPolicy:FC = () => {
  return (
		<Container>
			<Title>Shipping Policy</Title>
			
		</Container>
  );
}

export default ShippingPolicy;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;