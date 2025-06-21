import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContactFormChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
    console.log('Leave a message form:', form);
    setForm({ name: '', email: '', message: '' });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! We will get in touch soon.');
    console.log('Bottom form:', contactForm);
    setContactForm({ name: '', email: '', phone: '' });
  };

  return (
    <div>
      {/* Banner */}
      <img
        src="/assets/contact.png"
        alt="Contact Banner"
        style={{ width: '100%', height: '411px', objectFit: 'cover' }}
      />

      {/* Heading */}
      <div style={{ textAlign: 'center', margin: '40px 0 20px' }}>
        <h2>Contact Us</h2>
      </div>

      {/* Contact Info + Message Form */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px',
        maxWidth: '1200px',
        margin: 'auto'
      }}>
        {/* Left Column */}
        <div style={{ flex: '1 1 300px', padding: '20px' }}>
          <h4>📍 Head Office</h4>
          <p>South Delhi, Gurugram, Noida</p>
          <p>B-1/628, 2nd Floor, Pillar No. 570, Near Dell Showroom, Janakpuri East Metro Station, New Delhi</p>

          <h4>📞 Mobile</h4>
          <p>
            <a href="tel:+918595076589" style={styles.link}>+91 8595076589,+91 9810526380</a>
          </p>

          <h4>📧 Email</h4>
          <p>
            <a href="mailto:property.charukhanna@gmail.com" style={styles.link}>
              property.charukhanna@gmail.com
            </a>
          </p>

          <h4>⏰ Working Hours</h4>
          <p>Mon - Sat: 10am - 7pm</p>
        </div>

        {/* Right Column: Leave a Message Form */}
        <div style={{
          flex: '1 1 300px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px'
        }}>
          <h4>Leave a Message</h4>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              style={styles.textarea}
            />
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>

      {/* Bottom Form Section with Background */}
      <div
        style={{
          backgroundImage: "url('/assets/form-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '60px 20px',
          marginTop: '40px'
        }}
      >
        <div style={{
          maxWidth: '600px',
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: '30px',
          margin: 'auto',
          borderRadius: '10px',
        }}>
          <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>
            We’d Love to Hear from You
          </h3>
          <form onSubmit={handleContactFormSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleContactFormChange}
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleContactFormChange}
              required
              style={styles.input}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={contactForm.phone}
              onChange={handleContactFormChange}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  textarea: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    resize: 'vertical'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  link: {
    color: '#007bff',
    textDecoration: 'none'
  }
};

export default Contact;
