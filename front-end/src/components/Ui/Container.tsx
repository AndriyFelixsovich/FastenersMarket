import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const Container:FC<IProps> = props => {
  return (
    <ContainerStyled  {...props}>{props.children}</ContainerStyled>
  );
}

export default Container;

const ContainerStyled = styled.div<{ maxWidth?: number | string }>`
	max-width: ${({ maxWidth }) => maxWidth || '1320px'};
	padding: 0 .75rem;
	margin: 0 auto;
`;