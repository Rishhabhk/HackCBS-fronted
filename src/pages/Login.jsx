import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material'

import './Login.css';
import loginImg from '../assets/loginimg.jpg';

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  function changeHandler(e) {
    const { name, value } = e.target;
    setLoginData((prevData) => {
      return {
        ...prevData, [name]: value
      }
    })
  }
  function submitHandler(e) {
    e.preventDefault();
    setLoggedIn(true);
    console.log(loginData);
    navigate("/home");

  }

  return (
    // <form onSubmit={submitHandler}>
    //    <label htmlFor="email">Email</label>
    //     <input type="text"
    //         name="email"
    //         value={loginData.email}
    //         id="email"
    //         onChange={changeHandler}
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input type="text"
    //         name="password"
    //         value={loginData.password}
    //         id="password"
    //         onChange={changeHandler}
    //     />
    //     <button>Submit</button>
    // </form>
    <div className='loginWrapper'>
      <form onSubmit={submitHandler}>
        <Typography variant='h4' color="primary">LOGIN</Typography>
        <TextField label="Email" variant='outlined'
          color='primary'
          type="text"
          name="email"
          value={loginData.email}
          id="email"
          onChange={changeHandler}
          required
        />
        <TextField label="Password" variant="outlined"
          style={{ color: "darkturquoise" }}
          type="password"
          name="password"
          value={loginData.password}
          id="password"
          onChange={changeHandler} 
          required
        />
        <Button size="large" type='submit' variant="contained">submit</Button>
      </form>
      <div className='imgWrapper'>
        <img src={loginImg} alt="" width="100%" />
      </div>
    </div>
  )
}

export default Login