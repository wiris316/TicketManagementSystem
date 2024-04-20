import '../assets/Login.scss';
import { Button } from '@mui/material';
import { signIn, getUser } from '../services/api';
import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

function Login({ setUser }) {
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })
  
  const signin = async (e) => {
    e.preventDefault();
    const user = await signIn(loginForm.email, loginForm.password)
    if (user) {
      setLoading(true);
      getUser(loginForm.email)
        .then((data) => {
          setUser({ ...data, email:loginForm.email })
        })
    } else {
      window.alert('Login failed. Please check your login information')
    }
  }

  const handleChange = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value});
  }

  return (
    <>
      {loading ?
        <Box height="80vh" display="flex" alignItems="center">
          <CircularProgress style={{color:'#a5be00'}} />
        </Box>
      : <div id="login-container">
        <h1 id="login-title">Ticket Management System</h1>
        <form id="login-form" onSubmit={signin}>
          <h4 id="login-header">LOGIN:</h4>
          <div id="user-info">
            <div id="form-content">
              <input type="email" id="email" name="email" value={loginForm.email} onChange={handleChange} placeholder="EMAIL"/>
              <input type="password" id="password" name="password" value={loginForm.password} onChange={handleChange} placeholder="PASSWORD"/>
            </div>
          </div>
          <Button id="login-button" type="submit" variant="contained" onSubmit={signin}>LOGIN</Button>
        </form>
      </div>
      }
    </>
  )
}

export default Login;