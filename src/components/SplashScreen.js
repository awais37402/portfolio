import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onComplete }) => {
    const message = "Welcome to My Portfolio";
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingSpeed = 100; // Speed of typing effect
        const displayTime = 3000; // Total display time

        const interval = setInterval(() => {
            setText(message.slice(0, i + 1));
            i++;
            if (i === message.length) {
                clearInterval(interval);
                setTimeout(() => setShowCursor(false), 500);
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
        <section className="splash-screen">
            <div className="text-wrapper">
                <p className="text">
                    <span>{text}</span>
                    {showCursor && <span className="cursor"></span>}
                </p>
            </div>
        </section>
    );
};

export default SplashScreen;
