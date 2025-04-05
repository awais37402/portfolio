import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote: "Awais is an incredibly talented designer! His creativity and professionalism exceeded my expectations.",
  },
  {
    name: "Sarah Smith",
    position: "Marketing Manager, XYZ Inc.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote: "Working with Awais was an amazing experience! He truly understands design and branding.",
  },
  {
    name: "Michael Brown",
    position: "Founder, StartupX",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "Awais' attention to detail and ability to bring ideas to life is outstanding. Highly recommend!",
  },
  {
    name: "Emily Johnson",
    position: "Creative Director, DesignHub",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote: "Awais delivered exceptional work on our project. His design solutions were both innovative and practical.",
  },
  {
    name: "David Wilson",
    position: "Product Manager, InnovateCo",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote: "Working with Awais was a pleasure. He's responsive, talented, and understands client needs perfectly.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [currentIndex, isAutoPlaying]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        <motion.h2 
          className="testimonial-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Client <span className="highlight">Testimonials</span>
        </motion.h2>

        <div className="testimonial-slider-container">
          <button 
            className="slider-button prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="slider-wrapper">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <div className="quote-icon open">"</div>
                  <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
                  <div className="quote-icon close">"</div>
                  <div className="testimonial-footer">
                    <div className="testimonial-image-wrapper">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name} 
                        className="testimonial-image" 
                      />
                      <div className="image-glow"></div>
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
                      <p className="testimonial-position">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            className="slider-button next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;