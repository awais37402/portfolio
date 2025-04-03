import React, { useState, useEffect } from "react";
import "./Testimonial.css";

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
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

  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="testimonial-section" id="testimonial">
      <h2 className="testimonial-title">What My Clients Say</h2>
      <div className="testimonial-slider-container">
        <button 
          className="slider-button prev" 
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          &lt;
        </button>
        
        <div className="testimonial-slider">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.name}-${index}`} 
              className={`testimonial-card ${index === 1 ? 'active' : ''}`}
            >
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <button 
          className="slider-button next" 
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          &gt;
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
    </section>
  );
};

export default Testimonial;
