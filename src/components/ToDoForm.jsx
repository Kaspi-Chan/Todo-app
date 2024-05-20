import React, { useState } from "react";
import Check from "./Check";

const ToDoForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    if (inputValue) {
      onSubmit(inputValue);
      setInputValue("");
    }
  };
  return (
    <form
      onSubmit={formSubmitHanlder}
      className="px-6 w-full flex items-center gap-3 lg:gap-6 rounded-md bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue mb-4 lg:mb-6"
    >
      <Check isChecked={false} />
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Create a new todo..."
        className="flex-1 py-3.5 lg:py-5 bg-inherit text-sm focus:outline-none text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue"
      />
    </form>
  );
};

export default ToDoForm;
