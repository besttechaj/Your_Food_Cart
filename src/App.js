import React from 'react';
import './App.css';
import Home from './screens/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';
import CartProvider from './components/ContextReducer';
function App() {
  return (
    //HERE WE HAVE WRAPPED THE BROWSER ROUTER(Router) IN index.js file
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createuser' element={<SignUp />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
