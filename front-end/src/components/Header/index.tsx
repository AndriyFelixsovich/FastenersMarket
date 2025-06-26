import { FC } from 'react';
import styled from 'styled-components';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import Container from '@/components/Ui/Container';
import Logo from '@/components/Shared/Logo';
import WishlistNavLink from '@/components/Header/components/WishlistNavLink';
import UserNavLink from '@/components/Header/components/UserNavLink';
import CartNavLink from '@/components/Header/components/CartNavLink';
import Navigation from '@/components/Header/components/Navigation/index';
import HeaderTotal from '@/components/Shared/HeaderTotal/index';


const Header:FC = () => {

  return (
		<HeaderStyled>
			<Container>

				<HeaderWrap>
					<Logo />
					<Toolbar>

						<HeaderTotalWrap>
							<WishlistNavLink />
							<HeaderTotal />
						</HeaderTotalWrap>

						<HeaderTotalWrap>
							<CartNavLink />
							<HeaderTotal />
						</HeaderTotalWrap>

						<UserNavLink />
					</Toolbar>
				</HeaderWrap>

				<Navigation />

			</Container>
		</HeaderStyled>
  );
}

export default Header;


const HeaderStyled = styled.header `
	background: var(--snow);
`;

const HeaderWrap = styled.div `
	display: flex;
	justify-content: space-between;
  align-items: center;
`;

const Toolbar = styled.div `
	display: flex;
	gap: 1.7rem;
`;

const HeaderTotalWrap = styled.div `
	display: flex;
  position: relative;
`;