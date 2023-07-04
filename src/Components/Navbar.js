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
          <img src="gbr3.png" alt="logo" />
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
                to="/policy"
                activeClassName="active"
                onClick={toggleMenu}  
                >
              Policy

                </NavLink>
              </li>
              <button>
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