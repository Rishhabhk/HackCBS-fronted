import React from 'react'
import './Task.css';
import { AiOutlineCheck } from "react-icons/ai";
import HotsBlogs from './HotsBlogs';
import { Button, TextField, Typography } from '@mui/material'
import { TaskData } from '../../data/TaskData';
import TaskVidContainer from './TaskVidContainer';
const Task = () => {
  const [form, setForm] = React.useState({
    title: "",
    description: ""
  });
  function handleform(event) {
    setForm(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  function handlefunc(event) {
    event.preventDefault()
  }
  return (
    <>
      <div className='taskwrapper'>
        <div className='taskone'>
          <form onSubmit={handlefunc}>
            <Typography style={{ display: 'flex', justifyContent: 'center' }}>ADD YOUR TASK</Typography>
            <TextField
              variant='outlined'
              size='small'
              type='text'
              label='Title'
              color='primary'
              placeholder='Title'
              name='title'
              onChange={handleform}
              value={form.title} />
            <TextField
              type='text'
              size='small'
              variant='outlined'
              color='primary'
              label='Description'
              name='description'
              onChange={handleform}
              value={form.description} />
            <Button className='submit' type='submit' variant='contained'>Add task</Button>
          </form>
          <div className='taskthree'>
            <Typography variant='h6' style={{display:'flex', justifyContent:'center'}}>Tasks</Typography>
            <div className='taskContainer'>
              {
                TaskData.map((task) => (
                  <div className='taskContainer'>
                    <Typography variant='body1' style={{ paddingLeft: '2rem' }}>{task.taskName}</Typography>
                    <TaskVidContainer />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='tasktwo'>
          <HotsBlogs />
        </div>
      </div>
    </>
  )
}
export default Task