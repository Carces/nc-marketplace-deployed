import { useState } from 'react';
import '../css/contact-form.css';

function Contact() {
  const [contactFormName, setContactFormName] = useState(null);
  const [contactFormEmail, setContactFormEmail] = useState(null);
  const [contactFormMsg, setContactFormMsg] = useState(null);
  // ... other local states for inputs

  return (
    <form className="contact-form">
      <h1 className="contact-form__header">Contact Us</h1>
      <section id="contact-form__name-section">
        <input
          id="contact-form__name-input"
          className="contact-form__input"
          aria-label="name"
          placeholder="Enter your name..."
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
          value={contactFormMsg}
          onChange={(event) => setContactFormMsg(event.target.value)}
        />
      </section>
      <button className="contact-form__submit-button">Submit</button>
    </form>
  );
}

export default Contact;
