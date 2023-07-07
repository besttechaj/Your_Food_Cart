import React, { createContext, useContext, useReducer } from 'react';

//Managing state using Concepts like useReducer(to create working logic) , Context API(createContext()...PROVIDER) , useContext(...CONSUME THE PROVIDER PASSED VALUED)

//creating  context to wrap the whole application ie PROVIDER
const CartStateContext = createContext();
const CartDispatchContext = createContext();

//defining reducer logic
const reducer = (state, action) => {};

const CartProvider = ({ children }) => {
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

//building logic for CONSUMING THE VALUE PROVIDED BY THE PROVIDER ie useContext()
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
