import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const LightMode = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Apply the theme class to the root element
    if (isLightMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-16 z-50 p-2 rounded-full bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
    >
      {isLightMode ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default LightMode;