import React from 'react';
import PriceTag from './PriceTag';

function ProductCard(name, price) {
  return (
    <>
      <PriceTag name={name} price={price} />
    </>
  );
}

export default ProductCard;
