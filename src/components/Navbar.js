import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about.html">Sobre Nosotros</a></li>
        <li><a href="/contact.html">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
