// src/components/HeroCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  { type: "video", src: "src/assets/home_img/80_-banner.mp4" },
  { type: "video", src: "src/assets/home_img/shop this spa.mp4" },
  { type: "video", src: "src/assets/home_img/banner-img-2.mp4" },
];

const HeroCarousel = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  return (
    <div className="relative w-full">
      {/* Custom Left Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
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

      {/* Custom Right Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        onClick={() => sliderRef.current.slickNext()}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;
