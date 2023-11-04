import React from 'react'
import { useState } from 'react';
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
import './TaskVidContainer.css';
import { TaskVidData } from '../../data/TaskVidData';


const TaskVidContainer = () => {
       var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
    };
    return (
        <div className='taskVidContainer'>
            <Slider {...settings} >
                {
                    TaskVidData.map((vid) => (
                        <div className="CardContainer">
                        <Card sx={{ maxWidth: 245 }} key={vid} >
                            <CardActionArea>
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
                                        <Typography  variant='body2' display='flex' alignItems='center'><VisibilityIcon fontSize='1rem' />{vid.views}</Typography>
                                        <Typography  variant='body2' display='flex' alignItems='center'><AccessTimeIcon fontSize='1rem' />{vid.duration}</Typography>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default TaskVidContainer

