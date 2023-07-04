import React, { useState, useEffect } from 'react';
import './FadeinEffect.css'; // Custom CSS file

const TextTransition = () => {
    const texts = [
        'Trailer Rentals in Riverside California', 
        'Open 7 Days a Week', 
        'Call Us Today!', 
        '951-688-1999'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 10000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="text-transition">
        {texts.map((text, index) => (
          <span
            key={index}
            className={`text-transition-inner ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            {text}
          </span>
        ))}
      </div>
    );
  };
  
  export default TextTransition;
  