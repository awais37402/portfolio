import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onComplete }) => {
  const message = "Welcome to My Portfolio";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingSpeed = 80; // Speed of typing effect
    const displayTime = 3000; // Display time in ms

    const interval = setInterval(() => {
      setText(message.slice(0, i + 1));
      i++;

      if (i === message.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 300);
      }
    }, typingSpeed);

    const timeout = setTimeout(() => {
      onComplete();
    }, displayTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="splash-screen">
      <h1>
        {text}
        {showCursor && <span className="cursor">|</span>}
      </h1>
    </div>
  );
};

export default SplashScreen;
