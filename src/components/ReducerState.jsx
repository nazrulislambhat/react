import { useReducer } from 'react';
function orderReducer(state, action) {
  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, action.payload];
    case 'REMOVE_ORDER':
      return state.filter((order) => order.id !== action.payload);
    case 'MARK_READY':
      return state.map((order) =>
        order.id === action.payload ? { ...order, status: 'ready' } : order
      ); // Mark an order as ready

    default:
      return state; // If the action is unknown, do nothing
  }
}
export default function ReducerState() {
  const [orders, dispatch] = useReducer(orderReducer, []);

  const addOrder = () => {
    const newOrder = {
      id: Date.now(),
      name: 'Cheese Burst Pizza',
      status: 'pending',
    };
    dispatch({ type: 'ADD_ORDER', payload: newOrder });
  };
  const removeOrder = (id) => {
    dispatch({ type: 'REMOVE_ORDER', payload: id });
  };
  const markReady = (id) => {
    dispatch({ type: 'MARK_READY', payload: id });
  };
  return (
    <div>
      <h1>Pizza Orders</h1>
      <button onClick={addOrder}>Add Order</button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.name} - {order.status}
            <button onClick={() => markReady(order.id)}>Mark Ready</button>
            <button onClick={() => removeOrder(order.id)}>
              Remove Order
            </button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
