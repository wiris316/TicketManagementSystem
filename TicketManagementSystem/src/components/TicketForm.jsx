import '../assets/TicketForm.scss';
import { signOutAuth, submitTicket } from '../services/api';
import { useState } from 'react';
import { Button } from '@mui/material';

function TicketForm({user, setUser}) {
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

  const logout = (e) => {
    const confirm = window.confirm('Are you sure you want to logout?')
    if (confirm) {
      signOutAuth()
        .then(() => {
          setUser({})
        });
    }
  }

  return (
    <>
      <span id="right-content">
        {!submitted && <p id="welcome">WELCOME {user.name.toUpperCase()}</p>}
        <Button id="logout-button" onClick={logout}>LOGOUT</Button>
      </span>
      <form id="ticket-form" onSubmit={(e) => handleSubmit(e)}>
        {submitted ?
          <div id="receipt-msg">
            Thank you for reaching out! We are working on your issue and will get back to you soon.
            <Button onClick={()=>setSubmitted(!submitted)} id="back-button">BACK</Button>
          </div>
          : <div id="form-content">
              <p id="note">* required field</p>
              <h3>TICKET FORM</h3>
              <div id="user-info">
                <div id="name-email">
                  <span className='input-fields'>
                    <label htmlFor="name">*NAME: </label>
                    <input type="text" id="name" name="name" value={form.name} onChange={updateForm} placeholder="Full Name" required/>
                  </span>
                  <span className='input-fields'>
                    <label htmlFor="email">*EMAIL: </label>
                    <input type="email" id="email" name="email" value={form.email} onChange={updateForm} placeholder="Email" required/>
                  </span>
                </div>
              
                <label htmlFor="subject">SUBJECT:</label>
                <input type="text" maxLength="50" id="subject" name="subject" value={form.subject} onChange={updateForm} />

              </div>

              <div id="description-container">
                <label htmlFor="description">*DESCRIPTION OF THE PROBLEM:</label>
                <textarea maxLength="1000" cols="50" type="text" id="description" name="description" value={form.description} onChange={updateForm} placeholder="Describe the issue in 1000 characters or less." required/>
              </div>

              <Button type="submit" id="submit-button">SUBMIT</Button>
          </div>
        }
      </form >
    </>
  )
}

export default TicketForm;