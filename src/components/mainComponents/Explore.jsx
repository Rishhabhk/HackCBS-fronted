import React from 'react'
import Navbar from '../Navbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import userImage from '../../assets/pic.jpeg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TaskVidContainer from './TaskVidContainer';
import '../../data/TaskData'
import { TaskData } from '../../data/TaskData';
import { RandomVidData } from '../../data/RandomVidData';
import './Explore.css'
import HotsBlogs from './HotsBlogs';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Explore = () => {
  const [embv, setEmbv] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='explore'>
      <div className="exploreMainContent">
        <div className='taskWrapper'>
          {
            TaskData.map((task) => (
              <div className='taskContainer'>
                <Typography variant='body1' style={{paddingLeft:'2rem'}}>{task.taskName}</Typography>
                <TaskVidContainer />
              </div>
            ))
          }
        </div>
        <div className="randomWrapper">
          <Typography variant='h6' style={{display:'flex', justifyContent:'center'}} >Explore Videos</Typography>
          <div className="randomVids">
            {
              RandomVidData.map((vid) => (
                <div className="RandomCardContainer">
                  {/* {embv ? (<></>):(null)} */}
                <Card sx={{ maxWidth: 245 }} key={vid}>
                  <CardActionArea onClick={() => setEmbv(true)}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={vid.imageUrl}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant='body1' component='div'>
                        {vid.title}
                      </Typography>
                      <br />
                      <Typography color="text.secondary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant='body2' display='flex' alignItems='center'><VisibilityIcon fontSize='1rem' />{vid.views}</Typography>
                        <Typography variant='body2' display='flex' alignItems='center'><AccessTimeIcon fontSize='1rem' />{vid.duration}</Typography>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="exploreAsideContent">
        <HotsBlogs />
      </div>
    </div>
  )
}

export default Explore