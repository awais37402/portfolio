// src/components/IntroScreen.js

import React, { useState, useEffect } from 'react';
import './intro.css'; // Import the intro CSS for splash screen styles
import awaisImage from '../assets/awais.png'; // Importing the image

const IntroScreen = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the intro screen after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds duration

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (!showIntro) {
    return null; // Don't render anything if intro is hidden
  }

  return (
    <div className="intro-container">
      <div className="intro-content">
        {/* Use the imported image variable */}
        <img src={awaisImage} alt="Awais Tahir" />
        <h1>Awais Tahir</h1>
      </div>

      {/* Add multiple bubble divs */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
};

export default IntroScreen;
