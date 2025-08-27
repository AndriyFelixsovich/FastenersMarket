import { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '@/components/Header/';
import Footer from '@/components/Footer/';
import HomePage from '@/pages/index';
import Page404 from '@/pages/Page404';
import Wishlist from '@/pages/Wishlist';
import ShoppingCart from '@/pages/ShoppingCart';
import Category from '@/pages/Category';
import Product from '@/pages/Product';
import Account from '@/pages/Admin/Account';

const App:FC = () => {

	const routes = [
		{ path: "/", element: <HomePage/> },
		{ path: "wishlist", element: <Wishlist/> },
		{ path: "shopping-cart", element: <ShoppingCart/> },
		{ path: "account", element: <Account/> },
		{ path: "/category/*", element: <Category/> },
		{ path: "/:product", element: <Product/> },
		{ path: "*", element: <Page404/> },
	];

  return (
    <>
			<Header />
				<main>
					<Routes>
						{	
							routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)	
						}
					</Routes>
				</main>
			<Footer />
		</>
  );
}

export default App;
