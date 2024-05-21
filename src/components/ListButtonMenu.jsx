import React, { useEffect, useState } from "react";

const ListButtonMenu = ({ tasksList, setTasksList, filteredList, setFilteredList }) => {
  const [tasksCount, setTaskCount] = useState(tasksList.length);

  useEffect(() => {
    setTaskCount(filteredList.length);
  }, [filteredList]);

  const ListButton = ({ onClick, children }) => {
    return (
      <button
        onClick={onClick}
        className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue font-bold hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover"
      >
        {children}
      </button>
    );
  };

  const showActive = () => {
    setFilteredList(tasksList.filter((task) => task.completed === false));
  };
  const showCompleted = () => {
    setFilteredList(tasksList.filter((task) => task.completed === true));
  };
  const showAll = () => {
    setFilteredList(tasksList);
  };
  const clearCompleted = () => {
    setTasksList((prevTasksList) => prevTasksList.filter((task) => task.completed === false));
  };

  return (
    <div className="px-6 py-4 w-full flex justify-between items-center text-[14px]">
      <span className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">{tasksCount} items left</span>
      <div className="w-full flex justify-center gap-4 absolute left-0 -bottom-16 px-6 py-4 bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-md shadow-md lg:p-0 lg:static lg:w-auto lg:rounded-none lg:shadow-none">
        <ListButton onClick={showAll}>All</ListButton>
        <ListButton onClick={showActive}>Active</ListButton>
        <ListButton onClick={showCompleted}>Completed</ListButton>
      </div>
      <button
        onClick={clearCompleted}
        className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default ListButtonMenu;
