import React from 'react'
import { HotsData } from '../../data/HotsData'
import { BlogsData } from '../../data/BlogsData';
import { Typography } from '@mui/material'
import { Link } from "react-router-dom";
import './HotsBlogs.css';

const HotsBlogs = () => {
    return (
        <div className='HotsBlogsContainer'>
            <div className="HotsContainer">
                <Typography variant='body1' style={{marginBottom:'0.5rem'}}>HOTS</Typography>
                {
                    HotsData.map((hot) => (
                        <Typography variant='body2' style={{marginBottom:'0.5rem'}}><a href={hot.url}>{hot.title}</a></Typography>
                    ))
                }
            </div>
            <div className="BlogsContainer">
                <Typography variant='body1' style={{marginBottom:'0.5rem'}}>BLOGS</Typography>
                {
                    BlogsData.map((blog) => (
                        <Typography variant='body2' style={{marginBottom:'0.5rem'}}><a href={blog.url}>{blog.title}</a></Typography>
                    ))
                }
            </div>
        </div>
    )
}

export default HotsBlogs