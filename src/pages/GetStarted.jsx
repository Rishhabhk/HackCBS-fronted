import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import startedImg from '../assets/startedimg.jpg';
import './GetStarted.css';
import logo from '../assets/logo.png';
import { Typography } from '@mui/material';


const GetStarted = () => {
  
  const navigate = useNavigate();
 
  return (  
    <div className='startedWrapper'>
      <div className='startedImg'>
        <img src={startedImg} alt="" width="100%"/>
      </div>
      <div className='startedDetails'>
        <p>
          <img src={logo} alt="" width="100%"/>
        </p>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, sequi ab provident nesciunt aliquid ut esse rem quo dolor commodi? Accusamus aliquid quo, quis saepe pariatur velit minima nemo cumque, provident, eum quas cum doloribus officiis recusandae id soluta inventore iusto ipsam autem tenetur dolores. Voluptate eligendi eos deserunt quaerat placeat at facilis nobis repellendus quod quibusdam vel ullam expedita, aliquam quos labore repellat possimus corporis doloribus maxime, nisi laudantium.</Typography>
        <Button onClick={()=>navigate('/signup')} size="large" variant='contained'>Get Started</Button>
      </div>
    </div>
  )
}

export default GetStarted;