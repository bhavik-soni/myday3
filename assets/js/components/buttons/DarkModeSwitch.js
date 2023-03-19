import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="relative rounded-full bg-white p-1 mr-2 text-gray-400 hover:text-black dark:bg-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="sr-only">
        Toggle {isDarkMode ? "light" : "dark"} mode
      </span>
      {isDarkMode ? (
        <IoMoonOutline className="h-6 w-6" aria-hidden="true" />
      ) : (
        <FiSun className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
