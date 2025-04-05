import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./Graphics.css";

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

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Graphics = () => {
  return (
    <section className="graphics-section">
      <div className="graphics-glass-container">
        <h2 className="graphics-title">
          <span className="title-gradient">Graphic Design</span>
        </h2>
        
        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ 
              delay: 2500,
              disableOnInteraction: false 
            }}
            loop
            speed={800}
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            className="trendy-swiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img 
                    src={img} 
                    alt={`Design ${index + 1}`} 
                    className="swiper-image" 
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <a 
          href="https://www.behance.net/awaistahir3808" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="behance-button"
        >
          <span>View Full Portfolio</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Graphics;