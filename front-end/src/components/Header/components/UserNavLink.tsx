import { FC } from 'react';
import { Link } from 'react-router-dom';
import User from '@/components/Icons/User';

const UserNavLink:FC = () => {
  return (
		<Link to="account">
			<User width={30} height={30} />
		</Link>
  );
}

export default UserNavLink;
