import { useState } from "react";
import ThemeSwitchBtn from "./components/ThemeSwitchBtn";

function App() {
  return (
    <div className="w-full h-screen relative">
      <div className="bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark w-full h-1/3 absolute top-0 left-0 bg-cover"></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
