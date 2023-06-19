import React from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const handleSubmit = async () => {
    //Using in-built fetch Api function ____ as we click on api we want to call the api
  };
  return (
    <>
      <div className='container my-2'>
        <form className='my-3 mx-3' onSubmit={handleSubmit}>
          <div className='form-group my-3'>
            <label for='name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter Your Name'
            />
          </div>
          <div className='form-group my-3'>
            <label for='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group my-3'>
            <label for='exampleInputPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>

          <div className='form-group my-3'>
            <label for='name'>Location</label>
            <input
              type='text'
              className='form-control'
              id='location'
              placeholder='Enter Your Location'
            />
          </div>

          <div className='form-check'>
            <input
              type='checkbox'
              className='form-check-input my-2'
              id='exampleCheck1'
              required
            />
            <label className='form-check-label my-2' for='exampleCheck1'>
              I Agreed to all Terms and Conditions
            </label>
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
          <p className='my-2'>
            Already have an Account?
            <span>
              <Link
                to='/login'
                className='btn btn-danger'
                style={{ fontSize: '1rem', fontWeight: 'bold' }}
              >
                Log In
              </Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
