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
  full_slug: string;
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
          <Link to={`/category/${route.slug}`}>{route.name}</Link>
          {route.children && route.children.length > 0 && (
            <ul className='dropdown'>
              {route.children.map((child) => (
                <li key={child.id}>
                  <Link to={`/category/${child.full_slug}`}>{child.name}</Link>
                    {child.children && child.children.length > 0 && (
                      <ul className='dropdown-two-subchild'>
                        {child.children.map((subchild) => (
                          <li key={subchild.id}>
                            <Link to={`/category/${subchild.full_slug}`}>{subchild.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    li {
      margin: 0;
      padding: 0;
      &:hover {
        .dropdown-two-subchild {
            opacity: 1;
            visibility: visible;
          }
      }
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
  .dropdown-two-subchild {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 100%;
    background-color: #fff;
    width: 70%;
    opacity: 0;
    visibility: hidden;
  }
`;
