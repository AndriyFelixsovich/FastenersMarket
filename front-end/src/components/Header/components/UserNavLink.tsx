import { FC } from 'react';
import { Link } from 'react-router-dom';
import User from '@/components/Icons/User';

const UserNavLink:FC = () => {
  return (
		<Link to="account">
			<User width={35} height={35} />
		</Link>
  );
}

export default UserNavLink;
