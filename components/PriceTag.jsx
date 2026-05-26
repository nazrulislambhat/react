import React from 'react';

function PriceTag(name, price) {
  return (
    <>
      <h4>{name}</h4>
      <h5>${price}</h5>
    </>
  );
}

export default PriceTag;
