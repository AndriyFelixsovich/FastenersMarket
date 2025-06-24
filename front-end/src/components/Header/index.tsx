import { FC } from 'react';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';
import Logo from '@/components/Shared/Logo';
import styles from './index.module.scss';

const Header:FC = () => {
  return (
		<HeaderStyled>
			<Container>
				<Logo />
			

			</Container>
		</HeaderStyled>
  );
}

export default Header;


const HeaderStyled = styled.header `
	background: #fffaf6;
`;