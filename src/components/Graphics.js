import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Graphics.css";

// Import images
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.png";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";

// Store images in an array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Graphics = () => {
  return (
    <div className="graphics-wrapper">
      <h2 className="graphics-heading">Graphic Design Projects</h2>
      <div className="graphics-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          loop
          pagination={{ clickable: true }}
          className="graphics-slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Graphic ${index + 1}`} className="slide-img" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Behance Link */}
        <a 
          href="https://www.behance.net/awaistahir3808" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="behance-link"
        >
          View More on Behance
        </a>
      </div>
    </div>
  );
};

export default Graphics;
