import { FC } from 'react';
import { Link } from 'react-router-dom';
import Heart from '@/components/Icons/Heart';

const WishlistNavLink:FC = () => {
  return (
		<Link to="wishlist">
			<Heart width={35} height={35} />
		</Link>
  );
}

export default WishlistNavLink;
