import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Community from './components/mainComponents/Community';
import Explore from './components/mainComponents/Explore';
import Task from './components/mainComponents/Task';
import Profile from './components/mainComponents/Profile';
import Notification from './components/mainComponents/Notifications';
import Chatbot from './components/mainComponents/Chatbot';

function App() {
  const theme = createTheme({
    palette:{
      mode:"light",
      primary:{
        main:'#127D8C' 
      }
    }
  })

  const [signedUp, setsignedUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({username: "", email: "", number: "", age: "", gender: "", password: ""})



  return (
    <div className="App">
      
        <ThemeProvider theme={theme}>
          <Header loggedIn={loggedIn}/>
          <Routes>
            <Route path ="/" element = {loggedIn ? <Home/> : <GetStarted/>}/>
            <Route path = "signup" element = {<SignUp userData={userData} setUserData={setUserData} setsignedUp={setsignedUp}/>}/>
            <Route path = "login" element = {<Login setLoggedIn={setLoggedIn}/>}/>
            <Route path = "home" element = {<Home/>}> 
              <Route path = "explore" element = {<Explore/>}/>
              <Route path = "community" element = {<Community/>}/>
              <Route path = "task" element = {<Task/>}/>
              <Route path = "profile" element = {<Profile/>}/>
              <Route path = "notification" element = {<Notification/>}/>
              <Route path = "chatbot" element = {<Chatbot/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      
    </div>
  );
}

export default App;
