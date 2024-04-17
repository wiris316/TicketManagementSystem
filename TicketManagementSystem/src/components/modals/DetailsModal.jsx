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
      >
        <Box id="Box" sx={{ width: 200 }}>
          <h4 id="modal-title">TICKET DETAILS</h4>
          <p id={`modal-${tickets.status.split(' ').join('')}`}>
            {tickets.status}
          </p>
          <p id="modal-">
            <label>id:</label> {tickets.id}
          </p>
          <p id="modal-">
            <label>name:</label> {tickets.name}
          </p>
          <p id="modal-">
            <label>subject:</label> {tickets.subject || 'n/a'}
          </p>
          <p id="modal-">
            <label>description:</label> {tickets.description}
          </p>
          <Button onClick={updateTicket}>Update Ticket</Button>
        </Box>
      </Modal>
      {openUpdate && <UpdateModal id={tickets.id} updateDashboard={updateDashboard} setOpenUpdate={setOpenUpdate} />}
    </>
  );
}

export default DetailsModal;