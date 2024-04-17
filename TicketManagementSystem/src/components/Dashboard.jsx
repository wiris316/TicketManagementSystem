import { fetchTickets } from "../services/api";
import { useEffect, useState } from "react";
import '../assets/Dasboard.scss';
import TicketColumn from "./TicketColumn";

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
    <div id="dashboard-div">
      <TicketColumn tickets={tickets} updateDashboard={handleUpdate} />
    </div>
  )
}

export default Dashboard;