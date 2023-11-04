import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = ({setsignedUp, userData, setUserData}) => {
    const navigate = useNavigate();

    function changeHandler(e){
        const {name, value} = e.target;
        setUserData((prevData) => {
            return {
                ...prevData, [name] : value
            }
        })
        
    }

    function submitHandler(e){
        e.preventDefault();
        setsignedUp(true);
        console.log(userData);
        setUserData({
            username: "", email: "", number: "", age: "", gender: "", password: ""
        })
        navigate("/login");
    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="name">Username</label>
        <input type="text"
            name="username"
            value={userData.username}
            id="name"
            onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        <input type="text"
            name="email"
            value={userData.email}
            id="email"
            onChange={changeHandler}
        />
        <label htmlFor="number">Number</label>
        <input type="text"
            name="number"
            value={userData.number}
            id="number"
            onChange={changeHandler}
        />
        <label htmlFor="age">Age</label>
        <input type="text"
            name="age"
            value={userData.age}
            id="age"
            onChange={changeHandler}
        />
        <label htmlFor="gender">Gender</label>
        <input type="text"
            name="gender"
            value={userData.gender}
            id="gender"
            onChange={changeHandler}
        />
        <label htmlFor="password">Password</label>
        <input type="text"
            name="password"
            value={userData.password}
            id="password"
            onChange={changeHandler}
        />
        <button>submit</button>
    </form>
  )
}

export default SignUp