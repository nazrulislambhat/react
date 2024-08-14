import React, { useReducer } from 'react';

const initialCart = [];

function cartReducer(cart, action) {
  switch (action.type) {
    case 'add':
      const existingItem = cart.find((item) => item.id === action.item.id);
      if (existingItem) {
        return cart.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...action.item, quantity: 1 }];
      }
    case 'remove':
      return cart.filter((item) => item.id !== action.id);
    case 'update':
      return cart.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    case 'clear':
      return [];
    default:
      throw new Error('Unknown action type');
  }
}

function UseReducerExample4() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const products = [
    { id: 1, name: 'Apple', price: 0.99 },
    { id: 2, name: 'Banana', price: 0.59 },
    { id: 3, name: 'Cherry', price: 2.99 },
  ];

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => dispatch({ type: 'add', item: product })}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      {cart.length === 0 && <p>Cart is empty.</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ${item.price} x {item.quantity}
          </span>
          <button onClick={() => dispatch({ type: 'remove', id: item.id })}>
            Remove
          </button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              dispatch({
                type: 'update',
                id: item.id,
                quantity: parseInt(e.target.value, 10),
              })
            }
          />
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h3>Total: ${total}</h3>
          <button onClick={() => dispatch({ type: 'clear' })}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default UseReducerExample4;
