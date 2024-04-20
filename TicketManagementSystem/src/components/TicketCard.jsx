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
        <p><label>DATE: </label>{tickets.createdAt.toDate().toLocaleString()}</p>
        <p><label>ID: </label>{tickets.id}</p>
        <p><label>SUBJECT: </label>{tickets.subject || 'n/a'}</p>
        <p><label>DESCRIPTION: </label>{tickets.description.substring(0, 200) + '...'}</p>
      </div>
    </div>
  )
}

export default TicketCard;