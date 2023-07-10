import React from 'react';
import './HomeMaterial.css';

function ButtonClick() { 
  return (
    <div>
      <button className="secondButton">Get in touch</button>
    </div>
  );
}

function Background() {
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src={process.env.PUBLIC_URL + '/desert.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function  HomeText (){
  return (
    <div className="text">
      <h1>Go Anywhere, Anytime!</h1>
      <p>Affordable trailer rentals in the Inland Empire </p>
    </div>
  );
}


export default function HomeMaterial() {
  return (
    <div>
      <Background />
      <HomeText />
      <ButtonClick/>
    </div>
  );
}
