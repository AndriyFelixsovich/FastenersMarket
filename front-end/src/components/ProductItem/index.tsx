import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '@/components/Ui/Img';
import QuantityCounter from '../Shared/QuantityCounter';
import Cart from '@/components/Icons/Cart';
import Heart from '@/components/Icons/Heart';

interface IProduct {
  id: number;
  name: string;
  description: string;
  image_path: string;
  price: number;
  quantity: number;
  origin_number: number;
}

interface IProductData {
  product: IProduct
}

const ProductItem:FC<IProductData> = ({ product }) => {
  return (
		<Wrap>
			  <IMG width={100} height={100} src={product.image_path} />
        <div>
          <Title to="/">{product.description}</Title>
          <Description>{product.name}</Description>
          <Sku>{product.origin_number}</Sku>

          <BlockPrice>
            <Price>{product.price}$</Price>
            <QuantityCounter />
          </BlockPrice>
          
          <Controls>
            <CartButton>
              <Cart width={29} height={29} />
            </CartButton>
            <WislistButton>
              <Heart width={28} height={28} />
            </WislistButton>
          </Controls>
        </div>
		</Wrap>
  );
}

export default ProductItem;

const Title = styled(Link) `
	color: #0270ac;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
`;

const Description = styled.p `
	color: #747474;
`;

const CartButton = styled.button `
	cursor: pointer;
  background: none;
  border: none;
`;

const WislistButton = styled.button `
	cursor: pointer;
  background: none;
  border: none;
`;

const Wrap = styled.div `
	display: grid;
  gap: 1rem;
  grid-template-columns: 30% 68%;
  margin: 1.5rem 0;
  padding: .5rem;
`;

const Controls = styled.div `
	display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.strong `
	color: #014e70;
  display: block;
  margin: .7rem 0;
`;

const BlockPrice = styled.div `
	display: flex;
  gap: 1rem;
  align-items: center;
`;

const Sku = styled.span `
  display: block;
	color: #747474;
`;

