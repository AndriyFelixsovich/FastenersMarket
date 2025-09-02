import { FC } from 'react';
import styled from 'styled-components';

const Preloader:FC = () => {
  return (
		<PreloaderWrap>
			<div className="loader"></div>
		</PreloaderWrap>
  );
}

export default Preloader;

const PreloaderWrap = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #fffaf6;
	display: flex;
  justify-content: center;
  align-items: center;

	.loader {
		width: 48px;
		height: 48px;
		border: 5px solid #163340;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		position: relative;
		animation: pulse 1s linear infinite;
	}
	.loader:after {
		content: '';
		position: absolute;
		width: 48px;
		height: 48px;
		border: 5px solid #163340;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		animation: scaleUp 1s linear infinite;
	}

	@keyframes scaleUp {
		0% { transform: translate(-50%, -50%) scale(0) }
		60% , 100% { transform: translate(-50%, -50%)  scale(1)}
	}
	@keyframes pulse {
		0% , 60% , 100%{ transform:  scale(1) }
		80% { transform:  scale(1.2)}
	}
`;


