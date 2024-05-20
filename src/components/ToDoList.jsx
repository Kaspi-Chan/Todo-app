import React from "react";
import Check from "./Check";
import CloseButton from "./CloseButton";

const ToDoList = ({ tasksList, setTaskList }) => {
  const removeTask = (id) => {
    setTaskList((prevTasksList) => prevTasksList.filter((task) => task.id !== id));
  };

  const markAsCompleted = (markedTask) => {
    setTaskList((prevTasksList) =>
      prevTasksList.map((task) => (task.id === markedTask.id ? { ...task, completed: !markedTask.completed } : task))
    );
  };

  return (
    <ul className="bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-md shadow-md">
      {tasksList.map((task) => (
        <li
          key={task.id}
          className="px-6 w-full flex items-center gap-3 lg:gap-6 hover-reveal bg-inherit first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md border-b border-light-very-light-grayish-blue dark:border-dark-extra-dark-grayish-blue last:border-none cursor-pointer"
        >
          <Check isChecked={task.completed} onClick={() => markAsCompleted(task)} />
          <p
            className={`flex-1 bg-inherit py-3.5 lg:py-5 text-sm 
            ${
              task.completed
                ? "line-through text-light-light-grayish-blue dark:text-dark-very-dark-grayish-blue"
                : "text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue"
            }`}
          >
            {task.text}
          </p>
          <CloseButton onClick={() => removeTask(task.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
