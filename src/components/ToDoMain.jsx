import React from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

const ToDoMain = () => {
  return (
    <main className="container px-6 relative z-10 pt-14">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-light-very-light-gray text-3xl tracking-[10px] font-bold">TODO</h1>
        <ThemeSwitchBtn />
      </div>
      <form action="" className="p-2 w-full flex items-center bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue">
        <div></div>
        <input
          type="text"
          className="flex-1 bg-inherit h-6 focus:outline-none text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue"
        />
      </form>
    </main>
  );
};

export default ToDoMain;
