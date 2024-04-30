import React from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

const ToDoMain = () => {
  return (
    <main className="container px-6 relative z-10 pt-14">
      <div className="flex justify-between items-center">
        <h1 className="text-light-very-light-gray text-3xl tracking-[10px] font-bold">TODO</h1>
        <ThemeSwitchBtn />
      </div>
    </main>
  );
};

export default ToDoMain;
