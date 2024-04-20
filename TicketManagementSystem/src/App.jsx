import './App.css';
import Login from './components/Login';
import TicketForm from './components/TicketForm';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      {!user.role ? <Login setUser={setUser} />
        : user.role === 'admin' ? 
          <Dashboard user={user} setUser={setUser} />
          : <TicketForm user={user} setUser={setUser} />
      }
    </>
  )
}

export default App
