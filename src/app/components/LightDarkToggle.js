'use client'

import React, { useState, useEffect } from "react";

export default function LightDarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Retrieve the saved mode preference from localStorage
    const savedMode = localStorage.getItem("isDarkMode");
    // If there's a saved mode preference, use it to set the initial state
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    }
    // No need to include isDarkMode in the dependency array
    // We only want to run this effect once when the component mounts
  }, []);

  useEffect(() => {
    // Update document styles and localStorage when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
    // Update localStorage whenever isDarkMode changes
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className="w-32 lg:w-44 h-8 lg:h-12 text-center transition-colors flex z-50 right-0 text-center flex items-center justify-center border toggle">
      <span className="uppercase font-bold tracking-widest text-sm lg:text-xl upppercase text-center">{`${isDarkMode ? 'light mode' : 'dark mode'}`}</span>
    </button>
  );
}


