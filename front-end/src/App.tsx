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
import Contacts from '@/pages/Contacts';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import ReturnRefundPolicy from '@/pages/ReturnRefundPolicy';
import ShippingPolicy from '@/pages/ShippingPolicy';
import Service from '@/pages/Service';

const App:FC = () => {

	const routes = [
		{ path: "/", element: <HomePage/> },
		{ path: "wishlist", element: <Wishlist/> },
		{ path: "shopping-cart", element: <ShoppingCart/> },
		{ path: "account", element: <Account/> },
		{ path: "about", element: <About/> },
		{ path: "contacts", element: <Contacts/> },
		{ path: "blog", element: <Blog/> },
		{ path: "privacy-policy", element: <PrivacyPolicy/> },
		{ path: "return-refund-policy", element: <ReturnRefundPolicy/> },
		{ path: "shipping-policy", element: <ShippingPolicy/> },
		{ path: "service", element: <Service/> },
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
