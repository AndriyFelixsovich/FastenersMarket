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
	color: var(--black);
	border: 1px solid var(--light-grey);
	cursor: pointer;

	&:disabled[disabled] {
		color: var(--black);
		border-radius: 0;
		cursor: not-allowed;
	}
`;