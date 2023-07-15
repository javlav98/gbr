import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselExample = () => {
  return (
    <Carousel className='custom-carousel'>
      <div className='img'>
        <img src="img1.png" alt="Image 1" />
      </div>
      <div className='img'>
        <img src="img2.png" alt="Image 2" />
      </div>
      <div className='img'>
        <img src="img3.png" alt="Image 3" />
      </div>
      <div className='img'>
        <img src="img4.png" alt="Image 4" />
      </div>
        <div className='img'>
        <img src="img5.png" alt="Image 5" />
        </div>
        <div className='img'>
        <img src="img6.png" alt="Image 6" />
        </div>
        <div className='img'>
        <img src="img7.png" alt="Image 7" />
        </div>
        <div className='img'>
        <img src="img8.png" alt="Image 8" />
        </div>
    </Carousel>
  );
};

export default CarouselExample;
