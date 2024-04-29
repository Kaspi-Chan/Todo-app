import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitchBtn = () => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <button onClick={toggleTheme}>Switch to Mode</button>;
};

export default ThemeSwitchBtn;
