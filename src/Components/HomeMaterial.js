import React from 'react';
import './HomeMaterial.css'
import TextTransition from './FadeinEffect';


function Background () {
    return (
        <div style={{
          backgroundImage: `url("bg1.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'100vh',
          width: '100%',
          position: 'absolute',
          zIndex: '-1',
          top: '0',
        }}>
        
        </div>
    )
}

export default function HomeMaterial () {
  return (
    <div>
      <TextTransition />
      <Background />
    </div>
  )
}