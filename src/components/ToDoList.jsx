import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import ListButtonMenu from "./ListButtonMenu";
import ListItem from "./ListItem";
import { db } from "../firebase";
import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";

const ToDoList = ({ tasksList, setTasksList }) => {
	const [filteredList, setFilteredList] = useState(tasksList);

	useEffect(() => {
		const q = query(collection(db, "todos"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let todoArr = [];
			querySnapshot.forEach((doc) => {
				todoArr.push({ ...doc.data(), id: doc.id });
			});
			setFilteredList(todoArr);
		});
		return () => unsubscribe();
	}, [tasksList]);

	const removeTask = async (id) => {
		await deleteDoc(doc(db, "todos", id));
	};

	const markAsCompleted = async (markedTask) => {
		await updateDoc(doc(db, "todos", markedTask.id), {
			completed: !markedTask.completed,
		});
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
		<>
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
