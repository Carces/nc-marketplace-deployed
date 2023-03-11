import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/nav-and-footer.css';

function Footer() {
  return (
    <footer>
      <Link to="/about-us">
        <p className="footer__text footer__link">About Us</p>
      </Link>
      <Link to="/contact">
        <p className="footer__text footer__link">Contact</p>
      </Link>
      <p className="footer__text">© 2023</p>
    </footer>
  );
}

export default Footer;
