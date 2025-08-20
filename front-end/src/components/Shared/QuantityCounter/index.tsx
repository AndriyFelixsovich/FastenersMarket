import { FC } from 'react';
import styled from 'styled-components';
import useQuantity from '@/hooks/useQuantity';
import Button from '@/components/Ui/Buttons';
import Input from '@/components/Ui/Input';

const QuantityCounter:FC = () => {
  const {quantity, incrementQuantity, decrementQuantity, setQuantityHandler} = useQuantity();
  
  return (
		<>
      <QuantityWrap>
        <Button onClick={incrementQuantity}>+</Button>
        <Input type="text" value={quantity} onChange={(e) => setQuantityHandler(e.target.value)}  />
        <Button onClick={decrementQuantity}>-</Button>
      </QuantityWrap>
    </>
  );
}

export default QuantityCounter;

const QuantityWrap = styled.div `
	display: flex;
  gap: 1rem;
`;
