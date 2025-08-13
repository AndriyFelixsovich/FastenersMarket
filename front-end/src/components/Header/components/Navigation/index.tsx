import { FC, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';


interface Category {
  name: string;
  id: number;
  level: number;
  parent_id: number;
  slug: string;
  children?: Category[];
}

interface ApiResponse {
  category: Category[];
}

const Navigation:FC = () => {
  const [navRouts, setNavRouts] = useState<Category[]>([]);

  useEffect(() => {
    axios.get<ApiResponse>('https://fastenersmarket.local/api/v1/home')
      .then(response => {
        setNavRouts(response.data.category);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Nav>
    <ul>
      {navRouts.map((route) => (
        <li key={route.id}>
          <Link to={route.slug}>{route.name}</Link>

          {route.children && route.children.length > 0 && (
            <ul className='dropdown'>
              {route.children.map((child) => (
                <li key={child.id}>
                  <Link to={child.slug}>{child.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
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
    position: relative;
    li {
      position: relative;
      margin: 0;
      padding: 10px 4px;
      &:hover {
        .dropdown {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      position: relative;
    }
  }
  .dropdown {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    width: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    li {
      margin: 0;
      padding: 0;
      a {
        color: #000;
        padding: 7px;
        display: block;
        &:hover {
          background: #355360;
          color: #fff;
        }
      }
    }
  }
`;
