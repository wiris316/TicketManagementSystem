import '../assets/TicketForm.scss';
import { submitTicket } from '../services/api';
import { useState } from 'react';

function TicketForm() {
  const [form, setForm] = useState({
    name:'', email:'', subject:'',description:''
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
      window.alert('Ticket submitted.')
    }
  } 

  return (
    <form id="ticket-form" onSubmit={(e) => handleSubmit(e)}>
      <div id="form-content">
        <label htmlFor="name">name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={updateForm} />

        <label htmlFor="email">email:</label>
        <input type="text" id="email" name="email" value={form.email} onChange={updateForm} />

        <label htmlFor="subject">subject:</label>
        <input type="text" id="subject" name="subject" value={form.subject} onChange={updateForm} />

        <label htmlFor="description">description:</label>
        <input type="text" id="description" name="description" value={form.description} onChange={updateForm} />
        <button type="submit" id="submit-button">SUBMIT</button>
      </div>
    </form >
  )
}

export default TicketForm;