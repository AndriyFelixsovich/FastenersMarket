import { FC } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NAVIGATION_ROUTES from "./consts";

const Navigation:FC = () => {

  return (
    <Nav>
      <ul>
        {
          NAVIGATION_ROUTES.map((route, index) => (
            <li key={index + route.name}>
              <Link to={route.path}>
                {route.name}
              </Link>
            </li>
          ))
        }
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
    gap: 1rem;
    margin: 0;
    justify-content: center;
    a {
      text-decoration: none;
      color: var(--white);
      font-weight: 500;
    }
  }
`;
