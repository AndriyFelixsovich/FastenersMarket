import { FC } from 'react';
import { Link } from 'react-router-dom';
import Heart from '@/components/Icons/Heart';

const WishlistNavLink:FC = () => {
  return (
		<Link to="wishlist">
			<Heart width={30} height={30} />
		</Link>
  );
}

export default WishlistNavLink;
