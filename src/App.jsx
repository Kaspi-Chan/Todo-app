import { useState } from "react";
import ThemeSwitchBtn from "./components/ThemeSwitchBtn";

function App() {
  return (
    <div>
      <ThemeSwitchBtn />
      <div className="size-8 bg-slate-500 dark:bg-black"></div>
    </div>
  );
}

export default App;
