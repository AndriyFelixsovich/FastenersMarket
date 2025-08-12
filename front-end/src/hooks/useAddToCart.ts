import { useState } from 'react';

const useAddToCart = () => {
  const [cartData, setCartData] = useState([]);

  const addToCart = () => {
    console.log('add')
  }

  const removeFromCart = () => {
    console.log('remove')
  }

  return {cartData, addToCart, removeFromCart}

}

export default useAddToCart;