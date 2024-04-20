import { fetchTickets } from "../services/api";
import { useEffect, useState } from "react";
import '../assets/Dasboard.scss';
import TicketColumn from "./TicketColumn";
import { signOutAuth } from "../services/api";
import { Box, Button, CircularProgress } from '@mui/material';

function Dashboard({user, setUser}) {
  const [tickets, setTickets] = useState([]);
  const [updates, setUpdates] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      fetchTickets()
        .then((data) => {
          setTickets(data);
          if (refresh === true) {
            setRefresh(!refresh);
          }
        })
        .catch((error) => console.log('Error fetching tickets', error))
    }, 1000);
    
    return () => {
      clearTimeout(timeoutID);
    }
  }, [updates])

  const handleUpdate = () => {
    setUpdates(!updates);
    setRefresh(!refresh);
  }

  const logout = () => {
    const confirm = window.confirm('Are you sure you want to logout?')
    if (confirm) {
      signOutAuth()
        .then(() => {
          setUser({})
        });
    }
  }

  return (
    <>
      {tickets.length ? 
        <div id="dashboard-container">
          {
            refresh? <CircularProgress id="refresh-circular-progress" style={{color:'#a5be00'}}/>
            : <Button id="refresh-button" onClick={handleUpdate}>REFRESH</Button>
          }
          <span id="right-content">
            <p id="welcome">WELCOME {user.name.toUpperCase()}</p>
            <Button id="logout-button" onClick={logout}>LOGOUT</Button>
          </span>
          <h1 id="dashboard-header">TICKET DASHBOARD</h1>
          <div id="dashboard-div">
            <TicketColumn tickets={tickets} updateDashboard={handleUpdate} />
          </div>
        </div>
      : <Box height="80vh" display="flex" alignItems="center">
        <CircularProgress style={{color:'#a5be00'}} />
      </Box>
      }
    </>
  )
}

export default Dashboard;