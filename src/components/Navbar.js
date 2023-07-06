import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link
            className='navbar-brand fs-3 fst-italic'
            style={{
              fontSize: 'bolder',
            }}
            to='/'
          >
            Your_Food_Cart
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link active fs-5'
                  aria-current='page'
                  to='/'
                >
                  Home
                </Link>
              </li>
              {/* if the localStorage has authToken that means user is already
              logged-in so display my order button  else don't display My Order button*/}
              {localStorage.getItem('authToken') ? (
                <li className='nav-item'>
                  <Link
                    className='nav-link active fs-5 '
                    aria-current='page'
                    to='/'
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ''
              )}
            </ul>
            {!localStorage.getItem('authToken') ? (
              <div className='d-flex'>
                <Link className='btn btn-primary mx-3' to='/login'>
                  Login
                </Link>
                <Link className='btn btn-primary' to='/createuser'>
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <Link className='btn btn-primary mx-2' to='/'>
                  My Cart
                </Link>
                <Link
                  className='btn btn-danger mx-2'
                  to='/login'
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
