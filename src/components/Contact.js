import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '', 
    reply_to: '',  
    message: ''
  });

  const [isSent, setIsSent] = useState(false); 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_3cmvgtm';
    const templateID = 'template_dhooqlf';
    const userID = 'gCHz3UzOdhnrchsu5';

    emailjs.send(serviceID, templateID, form, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true); 
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
    
    setForm({ from_name: '', reply_to: '', message: '' }); 
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      {isSent && <p className="success-message">Your message has been sent successfully!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name" 
          placeholder="Name"
          value={form.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Email"
          value={form.reply_to}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;