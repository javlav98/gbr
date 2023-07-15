import React from 'react'
import './Home.css';

function Background () {
  return (
    <div className="video-container">
    <video autoPlay muted loop className="video">
      <source src="/desert.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default function Home() {
  return (
    <div>
      <Background />
    </div>
  )
}
