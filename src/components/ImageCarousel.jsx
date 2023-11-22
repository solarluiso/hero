import React from "react";

import { image1, image2, image3 } from "../assets";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ImageCarousel.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    adaptiveHeight: true, // Adjust the carousel height based on the content
    lazyLoad: "ondemand", // Load images only when they enter the viewport
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="Image 1" className="carousel-image" />
      </div>
      <div>
        <img src={image2} alt="Image 2" className="carousel-image" />
      </div>
      <div>
        <img src={image3} alt="Image 3" className="carousel-image" />
      </div>
    </Slider>
  );
};

export default ImageCarousel;
