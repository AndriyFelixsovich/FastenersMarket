import { FC } from 'react';
import { Link } from 'react-router-dom';
import Cart from '@/components/Icons/Cart';

const CartNavLink:FC = () => {
  return (
		<Link to="shopping-cart">
			<Cart width={35} height={35} />
		</Link>
  );
}

export default CartNavLink;
