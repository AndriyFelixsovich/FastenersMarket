import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	ariaLabel?: string;
}

const Input:FC<IProps> = ({ ariaLabel = 'input', ...props }) => {
  return (
    <InputStyled {...props} type="text" aria-label={ariaLabel} />
  );
}

export default Input;

const InputStyled = styled.input`
	font-size: 1rem;
	font-family: inherit;
	width: 100%;
	margin: .7rem 0;
	padding: .3rem;
	border-radius: 0;
	border: 1px solid var(--light-grey);
	box-sizing: border-box;
	&:-webkit-autofill {
		box-shadow: 0 0 0 10rem #fff inset;
	}
`;