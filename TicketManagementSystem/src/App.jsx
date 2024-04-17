import './App.css';
import Login from './components/Login';
import TicketForm from './components/TicketForm';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')

  return (
    <>
      {user == '' ? <Login setUser={setUser} />
        : user === 'admin' ? 
            <Dashboard />
          : <TicketForm />
      }
    </>
  )
}

export default App
