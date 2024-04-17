import { Modal, Box, Button } from '@mui/material';
import '../../assets/UpdateModal.scss';
import { useState } from 'react';
import { updateTicket } from '../../services/api';

function UpdateModal({id, updateDashboard, setOpenUpdate}) {
  const [selectedVal, setSelectedVal] = useState('new');
  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = (e) => {
    setOpen(false);
    setOpenUpdate(false);
  };

  const handleSelection = (e) => {
    e.stopPropagation();
    setSelectedVal(e.target.value);
  }

  const handleSubmit = () => {
    updateTicket(id, selectedVal);
    handleClose();
    updateDashboard();
  }

  return (
    <>
    <Button onClick={handleOpen}> Update Ticket </Button>
    <Modal
      open={open}
      onClose={handleClose}
    >
        <Box id="Box1" sx={{ width: 200 }} onClick={(e)=>e.stopPropagation()}>
          <h4 id="modal-title">Set ticket status as:</h4>
          <select className="selection" value={selectedVal} onChange={handleSelection} >
            <option value="new">new</option>
            <option value="in progress">in progress</option>
            <option value="resolved">resolved</option>
          </select>

        <Button onClick={handleSubmit}>SUBMIT</Button>
      </Box>
    </Modal>
    </>
  );
}

export default UpdateModal;