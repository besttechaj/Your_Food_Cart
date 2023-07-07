import React, { createContext, useReducer } from 'react';

//creating  context to wrap the whole application
const CartStateContext = createContext();
const CartDispatchContext = createContext();

//defining reducer logic
const reducer = (state, action) => {};

export const CartProvider = ({ children }) => {
  //defining reducer: it will take two parameters initial state and reducer logic
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartStateContext.Provider value={dispatch}>
      <CartDispatchContext.Provider value={state}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartProvider;
