import { FC, useState } from 'react';

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    console.log('incrementQuantity')
  }

  const decrementQuantity = () => {
    console.log('decrementQuantity')
  }

  const setQuantityHandler = () => {
    console.log('setQuantityHandler')
  }

  return {quantity, setQuantity, incrementQuantity, decrementQuantity, setQuantityHandler}

}

export default useQuantity;