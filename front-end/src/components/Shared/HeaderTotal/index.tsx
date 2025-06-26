import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTotal:FC = () => {
  return (
		<TotalQuntity>0</TotalQuntity>
  );
}

export default HeaderTotal;

const TotalQuntity = styled.div `
    color: var(--white);
    border-radius: 50%;
    background: var(--black);
    display: flex;
    width: 1.3rem;
    height: 1.3rem;
    font-size: 1rem;
    text-align: center;
    justify-content: center;
		position: absolute;
    right: -9px;
    top: -7px;
`;
