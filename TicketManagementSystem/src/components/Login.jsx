import '../assets/Login.scss';
import { Button } from '@mui/material';

function Login({ user, setUser }) {

  return (
    <>
      <div id="login-form">
        <Button onClick={()=>setUser('admin')}>ADMIN</Button>
        <Button onClick={()=>setUser('user')}>USER</Button>
      </div>

    </>
  )
}

export default Login;