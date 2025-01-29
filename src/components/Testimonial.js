import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const testimonials = [
    {
      image:
        "https://www.shutterstock.com/image-photo/outdoor-photo-man-45-years-260nw-2555759789.jpg?crop=faces&fit=crop&w=100&h=100", // Fixed URL
      name: "John Doe",
      role: "Web Developer",
      text: "Awais is an amazing web developer! He crafted a beautiful website for us, and we couldn't be happier with the result.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=100&h=100",
      name: "Emily Carter",
      role: "Graphic Designer",
      text: "Awais' design work is incredible. He captured our brand's essence perfectly and created designs that speak for themselves.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=100&h=100",
      name: "Mark Johnson",
      role: "Project Manager",
      text: "Working with Awais was a pleasure. He delivered high-quality work on time and was always responsive to feedback.",
    },
  ];

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setTransitioning(true); // Set transitioning to true for animation
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setTransitioning(true); // Set transitioning to true for animation
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Automatically switch testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 10000); // Change to 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle the end of the transition
  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <section id="testimonial" className="testimonial">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-container">
        {/* Circular Images */}
        <div className="testimonial-images">
          {testimonials.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.name}
              className={`testimonial-circle ${
                index === currentTestimonial ? "active" : ""
              }`}
            />
          ))}
        </div>

        {/* Main Testimonial Content */}
        <div
          className={`testimonial-content ${
            transitioning ? "exiting" : "active"
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <blockquote>"{testimonials[currentTestimonial].text}"</blockquote>
          <h4>{testimonials[currentTestimonial].name}</h4>
          <p>{testimonials[currentTestimonial].role}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="testimonial-navigation">
          <button className="nav-btn" onClick={prevTestimonial}>
            &lt;
          </button>
          <button className="nav-btn" onClick={nextTestimonial}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
