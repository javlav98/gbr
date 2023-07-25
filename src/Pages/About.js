import React from 'react'
import './About.css';

function AboutContent () {
  return (
    <div className="aboutContent">
      <h1>About</h1>
      <img src="/gbr3.png" alt="trailer" />
     <p>
     GBRentals is a trailer rental company located in Riverside Ca. 
     At GBRentals, 
     we take pride in providing top-quality trailers 
     for all your transportation needs. Whether you're
     moving to a new home, embarking on an exciting 
     road trip, or simply transporting equipment for a 
     special event, we've got the perfect trailer to 
     suit your needs. Our extensive fleet offers 
     various sizes and types of trailers, equipped with 
     the latest safety features to ensure a smooth and 
     secure journey. Experience 
     convenience, reliability, and affordability 
     with GBRentals today!
     </p>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <AboutContent />
    </div>
  )
}
