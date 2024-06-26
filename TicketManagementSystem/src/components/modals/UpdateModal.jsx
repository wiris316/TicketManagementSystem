import { Modal, Box, Button } from '@mui/material';
import '../../assets/UpdateModal.scss';
import { useState } from 'react';
import { updateTicket } from '../../services/api';

function UpdateModal({tickets, updateDashboard, closeModal}) {
  const [selectedVal, setSelectedVal] = useState(tickets.status);
  const [open, setOpen] = useState(true);
  const [response, setResponse] = useState('');
  const status = ['new', 'in progress', 'resolved'];

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = (e) => {
    setOpen(false);
    closeModal();
  };

  const handleSelection = (e) => {
    e.stopPropagation();
    setSelectedVal(e.target.value);
  }

  const handleSubmit = () => {
    updateTicket(tickets.id, selectedVal);
    const confirm = window.confirm('Update ticket status / send message?')
    if (confirm) {
      response === '' ? console.log('NO MESSAGE SENT') : console.log(`Email message sent to ${tickets.name}: ${response}`);
      window.alert('TICKET UPDATED (Check the console to see the sent message)');
      handleClose();
      updateDashboard();
    }
  }

  const updateResponse = (e) => {
    setResponse(e.target.value)
  }

  const filterOptions = () => {
    const filtered = [];
    status.forEach((ele, index) => {
      if (ele !== tickets.status) {
        filtered.push(<option value={ele} key={index+=1}>{ele}</option>);
      }
    })
    return filtered;
  }

  return (
    <>
    <Button onClick={handleOpen}> Update Ticket </Button>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box id="update-modal-box" sx={{ width: 200 }} onClick={(e)=>e.stopPropagation()}>
        <p id="modal-title">Set ticket status as:</p>
        <select className="selection" value={selectedVal} onChange={handleSelection} key={'select'}>
            <option value={tickets.status} key={0}>{tickets.status}</option>
          {filterOptions()}
        </select>
        <p>Send a response: </p>
        <textarea maxLength="1000" cols="50" id="response-input" type="text" name="response" onChange={updateResponse} placeholder={`Dear ${tickets.name},` }/>  
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </Box>
    </Modal>
    </>
  );
}

export default UpdateModal;