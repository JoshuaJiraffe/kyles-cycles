import React, { useState } from 'react';

export function Contact() {
  // State variables to store form data and confirmation message
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Save form data to state
    localStorage.setItem('formData', JSON.stringify(formData));

    // Optionally, you can reset the form after submission
    setFormData({ name: '', email: '', message: '' });

    // Provide a confirmation message to the user
    setConfirmationMessage('Your message has been sent!');
  };

  // Event handler for form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update form data in state
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ margin: '0 0 10px 0' }}>Contact Us</h2>
            <p style={{ margin: '0 0 5px 0' }}>If you have any questions or concerns, feel free to get in touch with us:</p>
            <ul>
              <li style={{ margin: '0 30px' }}>Phone: 702-829-0098</li>
              <li style={{ margin: '0 30px' }}>Email: <a href="mailto:kyles.cycles.help@gmail.com">kyles.cycles.help@gmail.com</a></li>
              <li style={{ margin: '0 30px' }}>Address: 445 W Center St, Provo, UT, 84601</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2>Send Us a Message</h2>
            {/* Display confirmation message if present */}
            {confirmationMessage && <p style={{ color: 'green' }}>{confirmationMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleInputChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </main>
  );
}
