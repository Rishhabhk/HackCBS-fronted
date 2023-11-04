import React from 'react'
import on from './on.jpeg'
import './Profile.css';
import userPic from '../../assets/pic.jpeg'
const Profile = () => {
  let url = "https://www.linkedin.com/in/harshi-agrawal-5a638b238/";
  let mail = "rishabhkushwaha08@gmail.com";
  return (
    <>
      <div className='profile'>
        <div className='img'>
          <img className='image' src={userPic} width='200' />
        </div>
        <div className='details'>
          <h2>Rishabh Kushwaha</h2>
          <a className='mail' href="mailto:rishabhkushwaha08@gmail.com">rishabhkushwaha08@gmail.com</a>
          <p className='cllg'>KIET group of institutions</p>
          <p className='phone'>9988998899</p>
          <a className='link' href={url}>Connect via Linkdln</a>
        </div>
      </div>

      <div className='interests'>
        <h2>Interests</h2>
        <div className='int'>
          <p>Python</p>
          <p>Django</p>
          <p>ReactJs</p>
          <p>ExpressJs</p>
          <p>MySQL</p>
        </div>
      </div>

      <div className='completed'>
        <h2>Task Completed</h2>
        <div className='comp'>
          <p>Python Completed</p>
          <p>Django Completed</p>
          <p>ReactJs Completed</p>
          <p>ExpressJs Completed</p>
          <p>MySQL Completed</p>
        </div>
      </div>

      <div className='incompleted'>
        <h2>Task Incompleted</h2>
        <div className='incomp'>
          <p>Nextjs Incompleted</p>
          <p>Rust Incompleted</p>
          <p>Flutter Incompleted</p>
          <p>Mongodb Incompleted</p>
          <p>Android Incompleted</p>
        </div>
      </div>

    </>
  )
}

export default Profile