import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	children: React.ReactNode;
}

const Select:FC<IProps> = ({ ...props }) => {
  return (
    <SelectStyled {...props} >{ props.children }</SelectStyled>
  );
}

export default Select;

const SelectStyled = styled.select`
	width: 100%;
	font-size: 1rem;
	font-family: inherit;
	margin: .7rem 0;
	padding: .3rem;
	border-radius: 0;
	background: #000;
	border: 1px solid lightblue;
	box-sizing: border-box;
	cursor: pointer;
`;