import { useState } from 'react';

const useQuantity = (initialValue: number = 1) => {
  const [quantity, setQuantity] = useState<number>(initialValue);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const setQuantityHandler = (value: number | string) => {
    const number = typeof value === 'number' ? value : parseInt(value, 10);
    if (!isNaN(number) && number >= 1) {
      setQuantity(number);
    }
  };

  return { quantity, setQuantity, incrementQuantity, decrementQuantity, setQuantityHandler };
};

export default useQuantity;
