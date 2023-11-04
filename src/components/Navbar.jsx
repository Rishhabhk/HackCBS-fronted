import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
    <div className='navbarContainer'>
      <ul>
        <li><NavLink to='/home/explore'><Button variant='text'  size='large' startIcon={<ExploreIcon/>} style={{justifyContent:'flex-start',paddingLeft:'2rem'}} fullWidth >Explore</Button></NavLink></li>
        <li><NavLink to='/home/community'><Button variant='text'size='large' startIcon={<PeopleIcon/>} style={{justifyContent:'flex-start',paddingLeft:'2rem'}} fullWidth>Community</Button></NavLink></li>
        <li><NavLink to='/home/task'><Button variant='text' size='large' startIcon={<AssignmentIcon/>} style={{justifyContent:'flex-start',paddingLeft:'2rem'}} fullWidth>Tasks</Button></NavLink></li>
        <li><NavLink to='/home/profile'><Button variant='text' size='large' startIcon={<AccountCircleIcon/>} style={{justifyContent:'flex-start',paddingLeft:'2rem'}} fullWidth>Profile</Button></NavLink></li>
        <li><NavLink to='/home/notification'><Button variant='text' size='large' startIcon={<CircleNotificationsIcon/>} style={{justifyContent:'flex-start',paddingLeft:'2rem'}} fullWidth>Notifications</Button></NavLink></li>
        <li><NavLink to='/home/chatbot'><Button variant='text' size='large' startIcon={<ChatIcon/>} style={{justifyContent:'flex-start',paddingLeft:'2rem'}} fullWidth>ChatBot</Button></NavLink></li>
      </ul>
      
    </div>
   
    </>
  )
}

export default Navbar