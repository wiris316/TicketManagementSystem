import '../assets/TicketCard.scss';
import DetailsModal from './modals/DetailsModal';
import { useState } from 'react';

function TicketCard({ tickets, updateDashboard}) {
  const [open, setOpen] = useState(false)
  const openTicketDetails = () => {
    setOpen(!open);
  }

  return (
    <div id="card-container" onClick={openTicketDetails}>
      {open && <DetailsModal tickets={tickets} open={open} setOpen={setOpen} updateDashboard={updateDashboard} />}
      <div className="card-content">
          <label>ticketid:</label>
          <p>{tickets.id}</p>
          <label>subject:</label>
          <p>{tickets.subject}</p>
          <label>description:</label>
          <p>{tickets.description.substring(0,100) + '...'}</p>
        </div>
    </div>
  )
}

export default TicketCard;