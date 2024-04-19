import '../assets/TicketForm.scss';
import { submitTicket } from '../services/api';
import { useState } from 'react';
import { Button } from '@mui/material';

function TicketForm({user}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: user.name, email: user.email, subject: '', description: ''
  });
  
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
      setForm({ name: user.name, email: user.email, subject: '', description: '' });
      window.alert('Ticket submitted.');
      setSubmitted(true);
    }
  }

  return (
    <form id="ticket-form" onSubmit={(e) => handleSubmit(e)}>
      {submitted ?
        <div id="receipt-msg">
          Thank you for reaching out! We are working on your issue and will get back to you soon.
          <Button onClick={()=>setSubmitted(!submitted)} id="back-button">BACK</Button>
        </div>
        : <div id="form-content">
            <p id="note">* required field</p>
            <h3>Ticket Form:</h3>
            <div id="user-info">
              <div id="name-email">
                <span>
                  <label htmlFor="name">*NAME: </label>
                  <input type="text" id="name" name="name" value={user.name} onChange={updateForm} placeholder="Full Name"/>
                </span>
                <span>
                  <label htmlFor="email">*EMAIL: </label>
                  <input type="text" id="email" name="email" value={user.email} onChange={updateForm} placeholder="Email"/>
                </span>
              </div>
            
              <label htmlFor="subject">SUBJECT:</label>
              <input type="text" id="subject" name="subject" value={form.subject} onChange={updateForm} />

            </div>

            <div>
              <label htmlFor="description">*DESCRIPTION OF THE PROBLEM:</label>
              <textarea maxLength="1000" cols="50" type="text" id="description" name="description" value={form.description} onChange={updateForm} placeholder="Describe the issue in 1000 characters or less."/>
            </div>

            <Button type="submit" id="submit-button">SUBMIT</Button>
        </div>
      }
    </form >
  )
}

export default TicketForm;