import React from 'react'
import './Home.css';

function Background () {
  return (
    <div className="video-container">
    <video autoPlay muted loop playsInline className="video">
      <source src="/desert.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

function Content () { 
  return (
    <div className="content">
      <h1>Go anywhere, anytime! </h1>
      <p>Affordable trailer rentals in the Inland Empire | Open 7 days a week | 5am - 9pm  </p>
      <button className="btn">Get in touch</button>
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <Background />
      <Content />
    </div>
  )
}
