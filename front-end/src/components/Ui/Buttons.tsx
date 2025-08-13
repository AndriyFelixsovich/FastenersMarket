import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	children: React.ReactNode;
	ariaLabel?: string;
	onClick: () => void;
}

const Button:FC<IProps> = ({ ariaLabel = 'button', ...props }) => {
  return (
    <ButtonStyled {...props} aria-label={ariaLabel}>{props.children}</ButtonStyled>
  );
};

export default Button;


const ButtonStyled = styled.button `
	font-family: inherit;
	margin: .7rem 0;
	border-radius: 0;
	color: #000;
	border: 1px solid lightblue;
	cursor: pointer;

	&:disabled[disabled] {
		color: #000;
		border-radius: 0;
		cursor: not-allowed;
	}
`;