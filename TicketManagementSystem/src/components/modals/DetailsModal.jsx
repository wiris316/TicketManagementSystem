import { Modal, Box, Button } from '@mui/material';
import '../../assets/DetailsModal.scss';
import { useEffect,useState } from 'react';
import UpdateModal from './UpdateModal';

function DetailsModal({ open, setOpen, tickets, updateDashboard}) {
  const [openUpdate, setOpenUpdate] = useState(false);

  useEffect(() => {
  },[openUpdate])

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateTicket = (e) => {
    e.stopPropagation();
    setOpenUpdate(true)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        id="details-modal"
      >
        <Box id="Box">
          <h4 id="modal-title">TICKET DETAILS</h4>
          <p id={`modal-${tickets.status.split(' ').join('')}`}>
            {tickets.status}
          </p>
          <p id="modal-date">
            <label>DATE:</label> {tickets.createdAt.toDate().toLocaleString()}
          </p>
          <p id="modal-ticketid">
            <label>ID:</label> {tickets.id}
          </p>
          <p id="modal-name">
            <label>NAME:</label> {tickets.name}
          </p>
          <p id="modal-subject">
            <label>SUBJECT:</label> {tickets.subject || 'n/a'}
          </p>
          <p id="modal-description">
            <label>DESCRIPTION:</label> {tickets.description}
          </p>
          <Button onClick={updateTicket}>Update Ticket</Button>
        </Box>
      </Modal>
      {openUpdate && <UpdateModal tickets={tickets} updateDashboard={updateDashboard} setOpenUpdate={setOpenUpdate} />}
    </>
  );
}

export default DetailsModal;