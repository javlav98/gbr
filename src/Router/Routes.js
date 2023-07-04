import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const Navrouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navrouter;