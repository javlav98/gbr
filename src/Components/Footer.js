import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaFacebook} from "react-icons/fa6";

import './Footer.css';


const Footer = () => {
  return (
    <footer>
     <ul className='iconContainer'>
       <li className='iconSm'> 
        <a><FaFacebook/></a>
        </li>
        <li className='iconSm'>
        <a><FaInstagram/></a>
        </li>
        <li className='iconSm'>
        <a><FaTiktok/></a>
        </li>
     </ul>
      <div className="footerNav">
      <ul className='ulFooter'>
          <li className="footer-item">
            <NavLink to="/"> Home </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/gallery"> Gallery </NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/contact"> Contact </NavLink>
          </li>
        </ul>
        <p className='Copyrights'>© 2023 GBRentals.</p>
      </div>
    </footer>
  );
};

export default Footer;
