import React, { useState, useEffect } from "react";

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

  const gradients = [
    "from-purple-900 via-blue-900 to-indigo-900",
    "from-indigo-900 via-purple-900 to-pink-900", 
    "from-blue-900 via-indigo-900 to-purple-900",
    "from-purple-900 via-pink-900 to-red-900",
    "from-indigo-900 via-blue-900 to-cyan-900"
  ];

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

  // Gradient animation effect
  useEffect(() => {
    const gradientTimer = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 4000); // Change gradient every 4 seconds

    return () => clearInterval(gradientTimer);
  }, [gradients.length]);

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
      <div className={`hidden lg:flex items-center justify-center bg-gradient-to-br ${gradients[gradientIndex]} w-1/2 px-12 relative overflow-hidden transition-all duration-1000 ease-in-out`}>
        {/* Animated background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-pink-600/20 to-red-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-600/10 via-purple-600/10 to-blue-600/10 animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" style={{animationDuration: '6s'}}></div>
        
        <div className="max-w-md space-y-6 text-center relative z-10">
          <h1 className={`text-4xl font-extrabold tracking-tight bg-gradient-to-r ${titleGradients[gradientIndex]} bg-clip-text text-transparent animate-pulse transition-all duration-1000`}>
            Welcome to MoortiMahal
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className={`text-xl font-medium bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent transition-all duration-1000`}>
              {displayedText}
              <span className="animate-pulse text-yellow-400 drop-shadow-lg">|</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        {/* This is where your Outlet component would go */}
        <div className="text-center">
          <div className="text-gray-600 text-lg">
            Your auth forms will appear here
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;