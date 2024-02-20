import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-center relative h-full rounded-3xl ">
      <button 
        className="absolute left-0 h-full bg-transparent" 
        onClick={prevSlide}
        style={{width: '15%'}}
      />
      <div className="carousel-slide w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-no-repeat rounded-xl" 
          style={{backgroundImage: `url(${images[currentSlide]})`}}
        />
      </div>
      <button 
        className="absolute right-0 h-full bg-transparent" 
        onClick={nextSlide}
        style={{width: '15%'}}
      />
    </div>
  );
};

export default Carousel;
