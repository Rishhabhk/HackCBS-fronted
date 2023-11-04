import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button, AppBar,Toolbar} from '@mui/material';
import logo from '../assets/logo.png';
import userImage from '../assets/pic.jpeg';


import './Header.css'

const Header = ({loggedIn, signedUp}) => {
  const userName = "Rishabh Kushwaha";
  const navigate = useNavigate();


  return (
    <AppBar color="default" variant='outlined'>
    <Toolbar className='header' variant='regular'>
        <div className='logoContainer'>
          <p onClick={()=> navigate("/home/explore")}>
            <img  src={logo} alt="" width="220" height="40"/>
          </p>
        </div>

        {
          loggedIn ? 
          <div className='headerUserDetails'>
            <p>{userName}</p>
            <p>
              <img src={userImage} alt="" width="40" heigth="40"/>
            </p>
          </div>
          :
          <div className='headerDetails'>
            <p>
              <Button onClick={() => navigate('/login')} variant="text">LOGIN</Button>
            </p>
            <p>
              <Button onClick={() => navigate('/signup')} variant="contained" >SIGN UP</Button>
            </p>
          </div>
        } 
    </Toolbar>
    </AppBar>
  )
}

export default Header;