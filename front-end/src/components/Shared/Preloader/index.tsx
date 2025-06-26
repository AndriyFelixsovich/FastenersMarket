import { FC } from 'react';
import styled from 'styled-components';

const Preloader:FC = () => {
  return (
		<PreloaderWrap>Preloader</PreloaderWrap>
  );
}

export default Preloader;

const PreloaderWrap = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--snow);
	display: flex;
  justify-content: center;
  align-items: center
`;
