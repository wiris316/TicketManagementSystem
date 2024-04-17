import { fetchTickets } from "../services/api";
import { useEffect, useState } from "react";
import '../assets/Dasboard.scss';
import TicketColumn from "./TicketColumn";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets()
      .then((data) => {
        setTickets(data)
      })
      .catch((error)=> console.log('error fetching tickets', error))
  },[])

  return (
    <div id="dashboard-div">
      <TicketColumn tickets={tickets} />
    </div>
  )
}

export default Dashboard;