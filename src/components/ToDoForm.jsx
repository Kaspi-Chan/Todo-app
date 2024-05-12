import React from "react";
import Check from "./Check";

const ToDoForm = () => {
  return (
    <form
      action=""
      className="pl-6 pr-12 w-full flex items-center gap-3 lg:gap-6 rounded-md bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue"
    >
      <Check isChecked={false} />
      <input
        type="text"
        placeholder="Create a new todo..."
        className="flex-1 bg-inherit h-12 lg:h-14 text-sm focus:outline-none text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue"
      />
    </form>
  );
};

export default ToDoForm;
