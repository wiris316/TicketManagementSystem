import { useEffect, useState } from 'react';
import '../assets/TicketColumn.scss';
import TicketCard from './TicketCard';

function TicketColumn({tickets}) {
  const [sortedTicket, setSortedTicket] = useState({new:[], ['inProgress']:[], resolved:[]})
  
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
      {Object.keys(sortedTicket).map((key) => (
        <div className="column">
          <h3 className='column-title'>{key}</h3>
          {sortedTicket[key].map((ticket) => (
            <TicketCard tickets={ticket} />
          ))}
        </div>
    ))}
    </div>
  )
}

export default TicketColumn;