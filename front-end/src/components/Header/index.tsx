import { FC } from 'react';
import styled from 'styled-components';
import Container from '@/components/Ui/Container';
import Navigation from '@/components/Header/components/Navigation';
import styles from './index.module.scss';

const Header:FC = () => {
  return (
		<header>
			<Container>
				<h2>Header</h2>
				
				<Navigation />

			</Container>
		</header>
  );
}

export default Header;