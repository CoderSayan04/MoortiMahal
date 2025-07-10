import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  const texts = [
    "Divinity Delivered Personally",
    "Sacred Idols at Your Doorstep",
    "Where Faith Meets Commerce",
    "Your Spiritual Shopping Destination",
    "Bringing Temples to Your Home"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [gradientIndex, setGradientIndex] = useState(0);

  const titleGradients = [
    "from-yellow-400 via-orange-500 to-red-500",
    "from-pink-400 via-purple-500 to-indigo-500",
    "from-cyan-400 via-blue-500 to-purple-500",
    "from-orange-400 via-pink-500 to-purple-500",
    "from-green-400 via-cyan-500 to-blue-500"
  ];

  const textGradients = [
    "from-cyan-400 via-purple-400 to-pink-400",
    "from-yellow-400 via-orange-400 to-red-400",
    "from-green-400 via-blue-400 to-purple-400",
    "from-pink-400 via-red-400 to-orange-400",
    "from-blue-400 via-purple-400 to-cyan-400"
  ];

  // Gradient color changing effect
  useEffect(() => {
    const gradientTimer = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % titleGradients.length);
    }, 4000); // Change gradient every 4 seconds

    return () => clearInterval(gradientTimer);
  }, [titleGradients.length]);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isTyping) {
      if (displayedText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // Show complete text for 3 seconds
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentTextIndex, texts]);

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center">
          <h1 className={`text-6xl font-black tracking-tight bg-gradient-to-r ${titleGradients[gradientIndex]} bg-clip-text text-transparent transition-all duration-1000`}>
            Welcome to MoortiMahal
          </h1>
          <div className="h-20 flex items-center justify-center">
            <p className={`text-2xl font-bold bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent transition-all duration-1000`}>
              {displayedText}
              <span className="animate-pulse text-yellow-400">|</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;