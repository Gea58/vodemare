import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#welkom">Welkom</a></li>
        <li><a href="#praktijk">Praktijk</a></li>
        <li><a href="#therapievormen">Therapievormen</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;