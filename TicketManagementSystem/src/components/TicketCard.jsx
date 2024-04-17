import '../assets/TicketCard.scss';

function TicketCard({ tickets }) {
  return (
    <div id="card-container">
      <div className="card-content">
          <label>ticketid:</label>
          <p>{tickets.id}</p>
          <label>subject:</label>
          <p>{tickets.subject}</p>
          <label>description:</label>
          <p>{tickets.description}</p>
        </div>
    </div>
  )
}

export default TicketCard;