import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '@/components/Ui/Img';
import QuantityCounter from '../Shared/QuantityCounter';

const ProductItem:FC = () => {
  return (
		<Wrap>
			  <IMG width={100} height={100} src="src/assets/images/home-img.webp" />
        <div>
          <Title to="/">Product</Title>
          <Description>Description</Description>
          <Controls>
            <Price>Price $</Price>
            <QuantityCounter />
            <div>Cart</div>
            <div>Wishlist</div>
          </Controls>
        </div>
		</Wrap>
  );
}

export default ProductItem;

const Title = styled(Link) `
	color: var(--honolulu-blue);
  text-decoration: none;
`;

const Description = styled.p `
	color: var(--sonic-silver);
`;

const Wrap = styled.div `
	display: grid;
  gap: 1rem;
  grid-template-columns: 30% 70%;
`;

const Controls = styled.div `
	display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.span `
	color: var(--dark-cerulean);
`;

