import React from 'react';
import './HomeMaterial.css';

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
      <p>Get the best deals on the best gear!</p>
      <button className='secondButton'>Shop Now</button>
    </div>
  );
}


export default function HomeMaterial() {
  return (
    <div>
      <Background />
      <HomeText />
    </div>
  );
}
