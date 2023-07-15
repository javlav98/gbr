import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const CarouselExample = () => {
  return (
    <Carousel className='custom-carousel'>
      <div className='img'>
        <img src="img1.png" alt="Image 1" />
        <p className="legend">Image 1</p>
      </div>
      <div className='img'>
        <img src="img2.png" alt="Image 2" />
        <p className="legend">Image 2</p>
      </div>
      <div className='img'>
        <img src="img3.png" alt="Image 3" />
        <p className="legend">Image 3</p>
      </div>
      <div className='img'>
        <img src="img4.png" alt="Image 4" />
        <p className="legend">Image 4</p>
      </div>
        <div className='img'>
        <img src="img5.png" alt="Image 5" />
        <p className="legend">Image 5</p>
        </div>
        <div className='img'>
        <img src="img6.png" alt="Image 6" />
        <p className="legend">Image 6</p>
        </div>
        <div className='img'>
        <img src="img7.png" alt="Image 7" />
        <p className="legend">Image 7</p>
        </div>
        <div className='img'>
        <img src="img8.png" alt="Image 8" />
        <p className="legend">Image 8</p>
        </div>
    </Carousel>
  );
};

export default CarouselExample;
