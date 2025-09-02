import { FC } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Navigation:FC = () => {

  return (
    <Nav>
    <ul>
      <li><Link to="/photo-selection">Selection by photo</Link></li>
      <li><Link to="/category-selection">Selection by category</Link></li>
      <li><Link to="/size-selection">Selection by size</Link></li>
    </ul>
  </Nav>
  );
};

export default Navigation;

const Nav = styled.nav `
  background: #355360;
	ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 2rem;
    margin: 0;
    justify-content: center;
    position: relative;
    li {
      position: relative;
      margin: 0;
      padding: 10px 4px;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      position: relative;
    }
  }
`;
