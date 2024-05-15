import React from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const tasksList = [
  {
    completed: true,
    text: 'Chipi Chipi Chipi Chipi Chapa'
  },
  {
    completed: false,
    text: 'Chipi Chipi Chipi Chipi Chapa'
  }
]

const ToDoMain = () => {
  return (
    <main className="mx-auto max-w-[320px] sm:max-w-[420px] lg:max-w-[540px] relative z-10 pt-14">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-light-very-light-gray text-3xl lg:text-4xl tracking-[15px] font-bold">TODO</h1>
        <ThemeSwitchBtn />
      </div>
      <ToDoForm />
      <ToDoList tasksList={tasksList} />
    </main>
  );
};

export default ToDoMain;
