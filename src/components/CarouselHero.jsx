import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  "/assets/shop-this-spa.mp4",
  "https://via.placeholder.com/1920x600?text=Banner+2",
  "https://via.placeholder.com/1920x600?text=Banner+3",
];

const CarouselHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {carouselImages.map((img, index) => (
          <div key={index}>
            <img 
              src={img} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-[600px] object-cover" 
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Discover Home Inspiration
        </h1>
      </div>
    </div>
  );
};

export default CarouselHero;
