import React, { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Using in-built fetch Api function ____ as we click on api we want to call the api

    try {
      const response = await fetch(`http://localhost:5000/api/loginuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //Passing and converting the data into json format
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      //DISPLAYING THE RESPONSE FROM THE SERVER-SIDE
      const serverResponse = await response.json();
      console.log(serverResponse);

      //we have success value at our backend
      //if the success is false then display the alert
      if (!serverResponse.success) {
        alert('Please Enter valid credentials');
      } else {
        //storing the auth token
        localStorage.setItem('authToken', serverResponse.authToken);
        //verifying
        console.log('auth-token is ', localStorage.getItem('authToken'));
        //redirecting the user to its home page
        navigate('/');
      }

      //after sending data empty the form
      setCredentials({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(`Error occur at front-end Login page`);
    }
  };
  return (
    <>
      <div className='container my-2'>
        <form className='my-3 mx-3' onSubmit={handleSubmit}>
          <h2 className='my-2' style={{ fontWeight: 'bold' }}>
            Login
          </h2>
          <div className='form-group my-3'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              onChange={handleChange}
              name='email'
              type='email'
              value={credentials.email}
              className='form-control'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group my-3'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              onChange={handleChange}
              name='password'
              value={credentials.password}
              type='password'
              className='form-control'
              placeholder='Password'
            />
          </div>

          <button type='submit' className='btn btn-success'>
            Submit
          </button>
          <p className='my-2'>
            Don't have an Account?
            <span>
              <Link
                to='/createuser'
                className='btn btn-danger'
                style={{ fontSize: '1rem', fontWeight: 'bold' }}
              >
                SignUp
              </Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
