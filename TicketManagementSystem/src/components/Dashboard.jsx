import { fetchTickets } from "../services/api";
import { useEffect, useState } from "react";
import '../assets/Dasboard.scss';
import TicketColumn from "./TicketColumn";
import { Box, Button, CircularProgress } from '@mui/material';

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [updates, setUpdates] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetchTickets()
        .then((data) => {
          setTickets(data);
          if (refresh === true) {
            setRefresh(!refresh);
          }
        })
        .catch((error)=> console.log('Error fetching tickets', error))
    },1000)
  }, [updates])

  const handleUpdate = () => {
    setUpdates(!updates);
    setRefresh(!refresh);
  }

  return (
    <>
      {tickets.length ? 
        <div>
          {
            refresh? <CircularProgress id="refresh-circular-progress" style={{color:'#a5be00'}}/>
            : <Button id="refresh-button" onClick={handleUpdate}>REFRESH</Button>
          }
          <h2>DASHBOARD</h2>
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