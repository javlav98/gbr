import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GBRentals
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
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
              to="/gallery"
              activeClassName="active"
              onClick={toggleMenu}
              >
                Pricing
                </NavLink>
              </li>
              <button className='firstButton'>
                <NavLink
                to="/contact"
                activeClassName="active"
                onClick={toggleMenu}
                    >
              Get in touch
                </NavLink>
              </button>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;