import React, { useEffect, useState } from "react";
import ListButton from "./ListButton";

const buttonClasses = {
	base: "text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover",
	active: "text-buttonActive",
};

const ListButtonMenu = ({ tasksList, removeTask, currentFilter, filteredTasks, handleFilterChange }) => {
	const [tasksCount, setTaskCount] = useState(tasksList.length);

	useEffect(() => {
		setTaskCount(filteredTasks.length);
	}, [filteredTasks]);

	const clearCompleted = async () => {
		tasksList.forEach((task) => {
			if (task.completed) {
				removeTask(task.id).catch((error) => console.error(`Failed to remove task: '${task.text}'`, error));
			}
		});
	};

	return (
		<div className={`px-6 py-4 w-full flex justify-between items-center text-[14px] ${tasksList.length === 0 ? "hidden" : ""}`}>
			<span className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">{tasksCount} items left</span>
			<div className="w-full flex justify-center gap-4 absolute left-0 -bottom-16 px-6 py-4 font-bold bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-md shadow-md lg:p-0 lg:static lg:w-auto lg:rounded-none lg:shadow-none">
				<ListButton id="all" onClick={() => handleFilterChange("all")} buttonClasses={buttonClasses} clickedBtn={currentFilter}>
					All
				</ListButton>
				<ListButton id="active" onClick={() => handleFilterChange("active")} buttonClasses={buttonClasses} clickedBtn={currentFilter}>
					Active
				</ListButton>
				<ListButton id="completed" onClick={() => handleFilterChange("completed")} buttonClasses={buttonClasses} clickedBtn={currentFilter}>
					Completed
				</ListButton>
			</div>
			<button onClick={clearCompleted} className={buttonClasses.base}>
				Clear Completed
			</button>
		</div>
	);
};

export default ListButtonMenu;
