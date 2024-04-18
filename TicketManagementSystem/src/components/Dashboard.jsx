import { fetchTickets } from "../services/api";
import { useEffect, useState } from "react";
import '../assets/Dasboard.scss';
import TicketColumn from "./TicketColumn";
import { CircularProgress } from '@mui/material';

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [updates, setUpdates] = useState(false);

  useEffect(() => {
    fetchTickets()
      .then((data) => {
        setTickets(data)
      })
      .catch((error)=> console.log('error fetching tickets', error))
  }, [updates])

  const handleUpdate = () => {
    setUpdates(!updates)
  }

  return (
    <>
      {tickets.length ? 
        <div id="dashboard-div">
          <TicketColumn tickets={tickets} updateDashboard={handleUpdate} />
        </div>
      : <CircularProgress/>
      }
    </>
  )
}

export default Dashboard;