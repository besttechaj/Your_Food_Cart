import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Using in-built fetch Api function ____ as we click on api we want to call the api

    try {
      const response = await fetch(`http://localhost:5000/api/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //Passing and converting the data into json format
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation,
        }),
      });

      //DISPLAYING THE RESPONSE FROM THE SERVER-SIDE
      const serverResponse = await response.json();
      console.log(serverResponse);

      //we have success value at our backend
      //if the success is false then display the alert
      if (!serverResponse.success) {
        alert('Please Enter valid credentials');
      }

      //after sending data empty the form
      setCredentials({
        name: '',
        email: '',
        password: '',
        geolocation: '',
      });
    } catch (error) {
      console.log(`Error occur at front-end SignUp page`);
    }
  };
  return (
    <>
      <div className='container my-2'>
        <form className='my-3 mx-3' onSubmit={handleSubmit}>
          <div className='form-group my-3'>
            <label htmlFor='name'>Name</label>
            <input
              onChange={handleChange}
              name='name'
              type='text'
              className='form-control'
              value={credentials.name}
              id='name'
              placeholder='Enter Your Name'
            />
          </div>
          <div className='form-group my-3'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              onChange={handleChange}
              name='email'
              type='email'
              value={credentials.email}
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
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              onChange={handleChange}
              name='password'
              value={credentials.password}
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>

          <div className='form-group my-3'>
            <label htmlFor='name'>Location</label>
            <input
              onChange={handleChange}
              value={credentials.geolocation}
              name='geolocation'
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
            <label className='form-check-label my-2' htmlFor='exampleCheck1'>
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
