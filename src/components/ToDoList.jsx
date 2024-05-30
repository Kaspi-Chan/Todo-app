import React, { useEffect, useMemo, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import ListButtonMenu from "./ListButtonMenu";
import ListItem from "./ListItem";
import { db } from "../firebase";
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc, writeBatch } from "firebase/firestore";

const ToDoList = ({ tasksList, setTasksList }) => {
	const [currentFilter, setCurrentFilter] = useState("all");

	useEffect(() => {
		const q = query(collection(db, "todos"), orderBy("order"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todoArr = [];
			querySnapshot.forEach((doc) => {
				todoArr.push({ ...doc.data(), id: doc.id });
			});
			setTasksList(todoArr);
		});
		return () => unsubscribe();
	}, []);

	const filteredTasks = useMemo(() => {
		switch (currentFilter) {
			case "completed":
				return tasksList.filter((task) => task.completed);
			case "active":
				return tasksList.filter((task) => !task.completed);
			default:
				return tasksList;
		}
	}, [tasksList, currentFilter]);

	const handleFilterChange = (filter) => {
		setCurrentFilter(filter);
	};

	const removeTask = async (id) => {
		await deleteDoc(doc(db, "todos", id));
	};

	const markAsCompleted = async (markedTask) => {
		await updateDoc(doc(db, "todos", markedTask.id), {
			completed: !markedTask.completed,
		});
	};

	const onDragEnd = async (result) => {
		const { destination, source } = result;

		if (!destination) return;
		if (destination.index === source.index) return;

		const newItems = Array.from(tasksList);

		const startIndex = tasksList.findIndex((item) => item.id === filteredTasks[source.index].id);
		const endIndex = tasksList.findIndex((item) => item.id === filteredTasks[destination.index].id);

		const [reorderedItem] = newItems.splice(startIndex, 1);
		newItems.splice(endIndex, 0, reorderedItem);

		setTasksList(newItems);
		updateDatabase(newItems);
	};

	const updateDatabase = async (newItems) => {
		const batch = writeBatch(db);
		newItems.forEach((task, index) => {
			const taskRef = doc(db, "todos", task.id);
			batch.update(taskRef, { order: index });
		});
		await batch.commit();
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="ToDoTasks">
					{(provided) => {
						return (
							<ul
								{...provided.droppableProps}
								ref={provided.innerRef}
								className="bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue rounded-md shadow-md relative">
								{filteredTasks.map((task, index) => (
									<ListItem key={task.id} task={task} index={index} markAsCompleted={markAsCompleted} removeTask={removeTask} />
								))}
								{provided.placeholder}
								<ListButtonMenu
									tasksList={tasksList}
									removeTask={removeTask}
									currentFilter={currentFilter}
									filteredTasks={filteredTasks}
									handleFilterChange={handleFilterChange}
								/>
							</ul>
						);
					}}
				</Droppable>
			</DragDropContext>
			<p
				className={`${
					tasksList.length === 0 ? "hidden" : ""
				} text-[14px] text-light-dark-grayish-blue dark:text-dark-dark-grayish-blue text-center mt-24 lg:mt-10`}>
				Drag and drop to reorder list
			</p>
		</>
	);
};

export default ToDoList;
