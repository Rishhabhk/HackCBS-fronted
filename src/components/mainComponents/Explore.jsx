import React from 'react'
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TaskVidContainer from './TaskVidContainer';
import '../../data/TaskData'
import { TaskData } from '../../data/TaskData';
import { RandomVidData } from '../../data/RandomVidData';
import './Explore.css'
import HotsBlogs from './HotsBlogs';
import Divider from '@mui/material/Divider';
import VidCard from './VidCard';

const Explore = () => {
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
        <Divider />
        <div className="randomWrapper">
          <Typography variant='h6' style={{display:'flex', justifyContent:'center'}} >Explore Videos</Typography>
          <div className="randomVids">
            {
              RandomVidData.map((vid) => (
                <div className="RandomCardContainer">
                  {/* {embv ? (<></>):(null)} */}
                  <VidCard VidData={vid}/>
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