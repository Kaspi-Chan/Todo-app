import React from "react";
import { useTheme } from "../context/ThemeContext";
import moonIcon from "../../public/icon-moon.svg";
import sunIcon from "../../public/icon-sun.svg";

const ThemeSwitchBtn = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <img className="cursor-pointer" onClick={toggleTheme} src={theme === "light" ? moonIcon : sunIcon} />;
};

export default ThemeSwitchBtn;
