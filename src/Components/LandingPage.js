import React from 'react';
import CarouselExample from './Carousel';
import './LandingPage.css';

const LandingPage = () => {


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <nav >
        <div className="navbar-container">
          <div className="navbar-logo" >
            GBRentals
          </div>
          <ul className='navbuttons'>
            <li>
              <a href="#home" onClick={() => scrollToSection('Home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection('About')}>
                About
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => scrollToSection('Gallery')}>
                Gallery
              </a>
            </li>
            <li> 
              <a href="#contact" onClick={() => scrollToSection('Contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header id="Home">
      <div className="video-container">
          <video autoPlay muted loop className="video">
            <source src="/desert.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="overlay"></div>
        <div className="header-content">
          <h1>Go Anywhere, Anytime!</h1>
          <p>Affordable trailer rentals in the Inland Empire | Open 7 days a week | 8am - 5pm </p>
          <button>Get in Touch</button>
        </div>
      </header>
      <main>
        <section id="About">
          <h2>About</h2>
          <img src="/gbr3.png" alt="trailer" />
          <p>
          Affordable trailer rentals in the Inland Empire. 
          Whether you're planning a weekend getaway or need 
          a convenient solution for transporting goods, our 
          trailers are the perfect choice.
          </p>
        </section>
        <section id="Gallery">
          <h2>Gallery</h2>
          <CarouselExample />
        </section>
        <section id="Contact">
          <h2>Contact</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder='Name'/>
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="text" id="email" placeholder='Email'/>
            </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea id="message" placeholder='Message'></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
