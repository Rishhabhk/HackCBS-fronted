import React from 'react'
import './Community.css';
import on from './on.jpeg'
import File from './File';
import userImg from '../../assets/pic.jpeg'
import { Button, TextField, Typography } from '@mui/material'
import { CommunityPostData } from '../../data/CommunityPostData';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';

const Community = () => {
  return (

    <div className='main'>
      <div className='postSection'>
        {/* <img className='on' src={on} />
        <div className='input'>
          <input className='post' type='text'
            placeholder='Start a post' />
        </div>
        <div className='media'>
          <File />
        </div> */}
        <form className='postForm'>
          <div className="row1">
            <img src={userImg} alt="" className='userImg' />
            <TextField fullWidth
              label='Whats in you mind ?'
              type='text'
              
            />
          </div>
          <div className="row2">
            <div className="imgInpclass">
              <label htmlFor="imgInp" className='imgLabel'>UPLOAD IMAGE</label>
              <input id='imgInp' type="file" />
            </div>
            <div className="postBtn">
              <Button size="small" type='submit' variant="contained">POST</Button>
            </div>
          </div>
        </form>
        <div className="postsContainer">
          {
            CommunityPostData.map((post) => (
              <div className="post">
                <div className="userDetails">
                  <img src={post.userImg} alt="" />
                  <Typography>{post.userName}</Typography>
                </div>
                <div className="postImg">
                  <img src={post.postImg} alt="" />
                </div>
                <div className="lcs">
                  <IconButton color='primary'><FavoriteBorderIcon/></IconButton>
                  <IconButton color='primary'><CommentIcon/></IconButton>
                  <IconButton color='primary'><ShareIcon/></IconButton>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='suggestedSection'>
        two
      </div>
    </div>

  )
}

export default Community