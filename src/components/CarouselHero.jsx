// src/components/HeroCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  { type: "video", src: "src/assets/home_img/80_-banner.mp4" },
  { type: "video", src: "src/assets/home_img/shop this spa.mp4" },
  { type: "video", src: "src/assets/home_img/banner-img-2.mp4" },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="w-full h-[600px]">
            {item.type === "video" ? (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={item.src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
