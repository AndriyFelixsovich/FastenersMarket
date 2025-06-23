import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	ariaLabel: string;
	children: React.ReactNode;
}

const Textarea:FC<IProps> = ({ ariaLabel = 'textarea', ...props }) => {
  return (
		<TextareaStyled {...props} aria-label={ariaLabel}>{props.children}</TextareaStyled>
  );
}

export default Textarea;

const TextareaStyled = styled.textarea`
	font-family: inherit;
	font-size: 1rem;
	width: 100%;
	margin: .7rem 0;
	padding: .3rem;
	border: 1px solid var(--light-grey);
	border-radius: 0;
	box-sizing: border-box;
`;