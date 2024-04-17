import '../assets/TicketForm.scss';

function TicketForm() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <form id="ticket-form" onSubmit={(e) => handleSubmit(e)}>
      <div id="form-content">
        <label htmlFor="name">name:</label>
        <input type="text" id="name" name="name"/>

        <label htmlFor="email">email:</label>
        <input type="text" id="email" name="email"/>

        <label htmlFor="subject">subject:</label>
        <input type="text" id="subject" name="subject"/>

        <label htmlFor="description">description:</label>
        <input type="text" id="description" name="description"/>
        <button type="submit" id="submit-button">SUBMIT</button>
      </div>
    </form >
  )
}

export default TicketForm;