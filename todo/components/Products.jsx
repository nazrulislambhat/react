import React from 'react';

function Products({ products }) {
  return (
    <div>
      <h1>Products:</h1>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;
