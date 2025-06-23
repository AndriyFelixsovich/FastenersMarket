import { FC } from 'react';
import { Link } from "react-router-dom";
import NAVIGATION_ROUTES from "./consts";

const Navigation:FC = () => {

  return (
    <nav>
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
    </nav>
  );
};

export default Navigation;
