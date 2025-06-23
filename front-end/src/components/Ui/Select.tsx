import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	ariaLabel?: string;
	children: React.ReactNode;
}

const Select:FC<IProps> = ({ ariaLabel = 'select', ...props }) => {
  return (
    <SelectStyled {...props} aria-label={ariaLabel} >{ props.children }</SelectStyled>
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
	background: var(--white);
	border: 1px solid var(--light-grey);
	box-sizing: border-box;
	cursor: pointer;
`;