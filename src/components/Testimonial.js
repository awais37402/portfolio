import React from "react";
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
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonial">
      <h2 className="testimonial-title">What My Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
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
    </section>
  );
};

export default Testimonial;
