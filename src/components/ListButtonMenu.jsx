import React, { useEffect, useState } from "react";

const buttonClasses =
	"text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue  hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover";

const ListButtonMenu = ({ tasksList, setTasksList, filteredList, setFilteredList }) => {
	const [tasksCount, setTaskCount] = useState(tasksList.length);
	const [clickedBtn, setClickedBtn] = useState("All");

	useEffect(() => {
		setTaskCount(filteredList.length);
	}, [filteredList]);

	const ListButton = ({ id, onClick, children }) => {
		const activeButtonClasses = clickedBtn === id ? "text-[#3A7CFD] dark:text-[#3A7CFD]" : "";
		return (
			<button
				onClick={() => {
					onClick();
					setClickedBtn(id);
				}}
				className={`${buttonClasses} ${activeButtonClasses}`}>
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
		<div className={`px-6 py-4 w-full flex justify-between items-center text-[14px] ${tasksList.length === 0 ? "hidden" : ""}`}>
			<span className="text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue">{tasksCount} items left</span>
			<div className="w-full flex justify-center gap-4 absolute left-0 -bottom-16 px-6 py-4 font-bold bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-md shadow-md lg:p-0 lg:static lg:w-auto lg:rounded-none lg:shadow-none">
				<ListButton id="All" onClick={showAll}>
					All
				</ListButton>
				<ListButton id="Active" onClick={showActive}>
					Active
				</ListButton>
				<ListButton id="Completed" onClick={showCompleted}>
					Completed
				</ListButton>
			</div>
			<button onClick={clearCompleted} className={buttonClasses}>
				Clear Completed
			</button>
		</div>
	);
};

export default ListButtonMenu;
