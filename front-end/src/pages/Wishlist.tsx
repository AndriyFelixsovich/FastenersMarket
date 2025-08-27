import { FC, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';
import ProductItem from '@/components/ProductItem';

const Wishlist:FC = () => {
  return (
		<Container>
			<Title>Wishlist</Title>
			
		</Container>
  );
}

export default Wishlist;

const Title = styled.h1 `
	text-align: center;
	margin: 1.5rem 0;
`;