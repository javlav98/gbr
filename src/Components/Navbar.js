import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GBRentals
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? 'Close' : 'Menu'}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <div className='linkContainer'>
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              activeClassName="active"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/gallery"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
          </div>
          <div className='SocialMedia'>
          <FaFacebook className='icon'/>
          <FaInstagram className='icon'/>
          <FaTiktok className='icon'/>
          </div>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;