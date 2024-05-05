import React from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";
import ToDoForm from "./ToDoForm";

const ToDoMain = () => {
  return (
    <main className="container px-6 relative z-10 pt-14">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-light-very-light-gray text-3xl tracking-[10px] font-bold">TODO</h1>
        <ThemeSwitchBtn />
      </div>
      <ToDoForm />
    </main>
  );
};

export default ToDoMain;
