import { FC } from 'react';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';
import Logo from '@/components/Ui/Logo';
import WishlistNavLink from '@/components/Header/components/WishlistNavLink';
import UserNavLink from '@/components/Header/components/UserNavLink';
import CartNavLink from '@/components/Header/components/CartNavLink';
import Navigation from '@/components/Header/components/Navigation';
import HeaderTotal from '@/components/Ui/HeaderTotal';

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

			</Container>
			<Navigation />
		</HeaderStyled>
  );
}

export default Header;


const HeaderStyled = styled.header `
	background: #d5d5d5;
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