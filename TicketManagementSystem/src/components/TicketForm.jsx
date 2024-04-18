import '../assets/TicketForm.scss';
import { submitTicket } from '../services/api';
import { useState } from 'react';
import { Button } from '@mui/material';

function TicketForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', subject: '', description: ''
  })
  
  const updateForm = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, email, name, subject } = form;
    const confirmed = window.confirm('Are you sure you want to submit?');
    if (confirmed) {
      submitTicket(description, email, name, subject);
      setForm({ name: '', email: '', subject: '', description: '' });
      window.alert('Ticket submitted.');
      setSubmitted(true);
    }
  }

  return (
    <form id="ticket-form" onSubmit={(e) => handleSubmit(e)}>
      {submitted ?
        <div id="receipt-msg">
          Thank you for reaching out! We are working on your issue and will get back to you soon.
        </div>
        : <div id="form-content">
            <p id="note">* required field</p>
            <h4>Ticket Form:</h4>
            <div id="user-info">
              <div id="name-email">
                <span>
                  <label htmlFor="name">*NAME: </label>
                  <input type="text" id="name" name="name" value={form.name} onChange={updateForm} />
                </span>
                <span>
                  <label htmlFor="email">*EMAIL: </label>
                  <input type="text" id="email" name="email" value={form.email} onChange={updateForm} />
                </span>
              </div>
            
              <label htmlFor="subject">SUBJECT:</label>
              <input type="text" id="subject" name="subject" value={form.subject} onChange={updateForm} />

            </div>

            <div>
              <label htmlFor="description">*DESCRIPTION OF PROBLEM:</label>
              <textarea maxLength="1000" cols="50" type="text" id="description" name="description" value={form.description} onChange={updateForm} />
            </div>

            <Button type="submit" id="submit-button">SUBMIT</Button>
        </div>
      }
    </form >
  )
}

export default TicketForm;