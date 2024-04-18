import { useEffect, useState } from 'react';
import '../assets/TicketColumn.scss';
import TicketCard from './TicketCard';

function TicketColumn({tickets, updateDashboard}) {
  const [sortedTicket, setSortedTicket] = useState({ new: [], ['inProgress']: [], resolved: [] })
  
  useEffect(() => {
    if (tickets) {
      sortTicketByCol();
    }
  }, [tickets])

  const sortTicketByCol = () => {
    const sorted = {new:[], ['in progress']:[], resolved:[]};
    tickets.forEach((ticket) => {
      sorted[ticket.status].push(ticket);
    })
    setSortedTicket(sorted);
  }

  return (
    <div id="column-container">
      {Object.keys(sortedTicket).map((key, i) => (
        <div className="column" key={i}>
          <h3 className={`column-title ${key.split(' ').join('')}`}>{key}</h3>
          <div className="column-content">
            {sortedTicket[key].map((ticket) => (
              <TicketCard key={ticket.id} tickets={ticket} updateDashboard={updateDashboard} />
            ))}
          </div>
        </div>
    ))}
    </div>
  )
}

export default TicketColumn;