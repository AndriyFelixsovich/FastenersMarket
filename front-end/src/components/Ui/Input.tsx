import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	type: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<IProps> = ({onChange, ...props }) => {
  return (
    <InputStyled {...props} type="text" onChange={onChange} />
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
	border: 1px solid lightblue;
	box-sizing: border-box;
	&:-webkit-autofill {
		box-shadow: 0 0 0 10rem #fff inset;
	}
`;