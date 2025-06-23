import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	children: React.ReactNode;
}

const Breadcrumbs:FC<IProps> = props => {
  return (
    <BreadcrumbsStyled {...props}>{props.children}</BreadcrumbsStyled>
  );
}

export default Breadcrumbs;

const BreadcrumbsStyled = styled.div `
		display: flex;
		align-items: center;
		overflow-x: auto;
	a {
		font-size: 0.7rem;
		white-space: nowrap;
	}
`;