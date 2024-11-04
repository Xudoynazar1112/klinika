import React, { useEffect, useState } from "react";
import darkImage from "/images/404-dark.jpg";
import lightImage from "/images/404.jpg";

const NotFound = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  console.log(darkMode);
  

  useEffect(() => {
    const handleStorageChange = () => {
      setDarkMode(localStorage.getItem('theme') === 'dark');
    };

    // Listen for storage changes in case theme changes
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <div className="w-4/6">
      <img src={darkMode ? darkImage : lightImage} alt="Not found" />
    </div>
  );
};

export default NotFound;
