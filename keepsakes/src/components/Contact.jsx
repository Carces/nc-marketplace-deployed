import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/forms.css';

function Contact() {
  const [contactFormName, setContactFormName] = useState('');
  const [contactFormEmail, setContactFormEmail] = useState('');
  const [contactFormMsg, setContactFormMsg] = useState('');

  return (
    <form className="page-content contact-form">
      <h1 className="contact-form__header">Contact Us</h1>
      <section id="contact-form__name-section">
        <input
          id="contact-form__name-input"
          className="contact-form__input"
          aria-label="name"
          placeholder="Enter your name..."
          required
          value={contactFormName}
          onChange={(event) => setContactFormName(event.target.value)}
        />
      </section>
      <section id="contact-form__email-section">
        <input
          id="contact-form__email-input"
          className="contact-form__input"
          aria-label="email"
          placeholder="Enter your email..."
          required
          value={contactFormEmail}
          onChange={(event) => setContactFormEmail(event.target.value)}
        />
      </section>
      <section id="contact-form__msg-section">
        <textarea
          id="contact-form__msg-input"
          className="contact-form__input contact-form__textarea"
          aria-label="message"
          placeholder="Enter your message..."
          required
          value={contactFormMsg}
          onChange={(event) => setContactFormMsg(event.target.value)}
        />
      </section>
      {contactFormMsg && contactFormEmail && contactFormName ? (
        <Link to="/contact-confirmation">
          <button className="contact-form__submit-button">Submit</button>
        </Link>
      ) : (
        <button className="contact-form__submit-button">Submit</button>
      )}
    </form>
  );
}

export default Contact;
