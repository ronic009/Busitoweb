import React from 'react';
import '../assets/styles/carousel.css';

const Carousel = () => {
  const images = [
    { src: 'carousel1.jpg', alt: 'Foto 1' },
    { src: 'carousel2.jpg', alt: 'Foto 2' },
  ];

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={require(`../assets/images/${image.src}`)} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
