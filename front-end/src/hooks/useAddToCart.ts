import { FC, useState } from 'react';

const useAddToCart = () => {
  const [cartData, setCartData] = useState([]);

  const addToCart = () => {
    console.log('add')
  }

  const removeFromCart = () => {
    console.log('remove')
  }

  return {cartData, setCartData, addToCart, removeFromCart}

}

export default useAddToCart;