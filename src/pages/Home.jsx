import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import Explore from '../components/mainComponents/Explore'
import Community from '../components/mainComponents/Community'
import Task from '../components/mainComponents/Task'
import {Routes, Route, Outlet, useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home/explore');
  },[]);
  return (
    <>
    <div className='homeWrapper'>
      <nav className='navWrapper'><Navbar/></nav>
      
      <main className='mainWrapper'>
         <Outlet/>
      </main>
      {/* <aside className='asideWrapper'>aside</aside> */}

      
    </div>
    
    </>
  )
}

export default Home