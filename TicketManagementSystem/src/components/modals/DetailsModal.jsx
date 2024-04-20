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

  const closeModal = () => {
    handleClose();
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        id="details-modal"
        onClick={stopPropagation} 
      >
        <Box id="Box">
          <h4 id="modal-title">TICKET DETAILS</h4>
          <p id={`modal-${tickets.status.split(' ').join('')}`}>
            {tickets.status.toUpperCase()}
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
          <label>DESCRIPTION:</label>
          <div id="modal-description">
          {tickets.description}
          </div>
          <Button onClick={updateTicket}>Update Ticket</Button>
        </Box>
      </Modal>
      {openUpdate && <UpdateModal tickets={tickets} updateDashboard={updateDashboard} closeModal={handleClose} />}
    </>
  );
}

export default DetailsModal;