import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './TaskVidContainer.css';
import { TaskVidData } from '../../data/TaskVidData';
import VidCard from './VidCard';

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
                            <VidCard VidData={vid}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default TaskVidContainer

