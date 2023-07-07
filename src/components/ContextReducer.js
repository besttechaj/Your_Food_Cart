import React, { createContext, useContext, useReducer } from 'react';

//Managing state using Concepts like useReducer(to create working logic) , Context API(createContext()...PROVIDER) , useContext(...CONSUME THE PROVIDER PASSED VALUED)

//creating  context to wrap the whole application ie PROVIDER
const CartStateContext = createContext();
const CartDispatchContext = createContext();

//defining reducer logic
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          // payload: action.payload,
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    default:
      console.log('unable to process result');
      return state;
  }
};

export const CartProvider = ({ children }) => {
  //defining reducer: it will take two parameters initial state and reducer logic
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

//building logic for CONSUMING THE VALUE PROVIDED BY THE PROVIDER ie useContext()
export const useCart = () => {
  return useContext(CartStateContext);
};
export const useDispatchCart = () => {
  return useContext(CartDispatchContext);
};
