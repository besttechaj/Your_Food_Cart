import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <Link
            to='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          ></Link>
          <span className='mb-3 mb-md-0 text-muted' style={{ color: 'white' }}>
            © 2023 Your_Food_Cart, Inc
          </span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <Link className='text-muted' to='#'>
              Twitter
            </Link>
          </li>
          <li className='ms-3'>
            <Link className='text-muted' to='#'>
              facebook
            </Link>
          </li>
          <li className='ms-3'>
            <Link className='text-muted' to='#'>
              Instagram
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
