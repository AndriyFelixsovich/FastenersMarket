import { useState } from 'react';

const useAddToWishlist = () => {
  const [wishlistData, setWishlistData] = useState([]);

  const addToWishlist = () => {
    console.log('add')
  }

  const removeFromWishlist = () => {
    console.log('remove')
  }

  return {wishlistData, addToWishlist, removeFromWishlist}

}

export default useAddToWishlist;