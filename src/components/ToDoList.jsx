import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import ListButtonMenu from "./ListButtonMenu";
import ListItem from "./ListItem";

const ToDoList = ({ tasksList, setTasksList }) => {
	const [filteredList, setFilteredList] = useState(tasksList);

	useEffect(() => {
		setFilteredList(tasksList);
	}, [tasksList]);

	const removeTask = (id) => {
		setTasksList((prevTasksList) => prevTasksList.filter((task) => task.id !== id));
	};

	const markAsCompleted = (markedTask) => {
		setTasksList((prevTasksList) =>
			prevTasksList.map((task) => (task.id === markedTask.id ? { ...task, completed: !markedTask.completed } : task))
		);
	};

	const onDragEnd = (result) => {
		const { destination, source } = result;

		if (!destination) return;
		if (destination.index === source.index) return;

		const newItems = Array.from(tasksList);
		const [reorderedItem] = newItems.splice(source.index, 1);
		newItems.splice(destination.index, 0, reorderedItem);
		setTasksList(newItems);
		setFilteredList(newItems);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="ToDoTasks">
				{(provided) => {
					return (
						<ul
							{...provided.droppableProps}
							ref={provided.innerRef}
							className="bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-md shadow-md relative">
							{filteredList.map((task, index) => (
								<ListItem key={task.id} task={task} index={index} markAsCompleted={markAsCompleted} removeTask={removeTask} />
							))}
							{provided.placeholder}
							<ListButtonMenu
								tasksList={tasksList}
								setTasksList={setTasksList}
								filteredList={filteredList}
								setFilteredList={setFilteredList}
							/>
						</ul>
					);
				}}
			</Droppable>
		</DragDropContext>
	);
};

export default ToDoList;
