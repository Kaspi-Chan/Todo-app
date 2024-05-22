import React, { useState } from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const ToDoMain = () => {
	const [tasksList, setTasksList] = useState([]);
	const [nextId, setNextId] = useState(1);

	const createTask = async (inputValue) => {
		if (inputValue === "") {
			alert("Please enter a valid task!");
			return;
		}

		await addDoc(collection(db, "todos"), {
			text: inputValue,
			completed: false,
		});
	};

	return (
		<main className="mx-auto max-w-[320px] sm:max-w-[420px] lg:max-w-[540px] relative z-10 pt-14">
			<div className="flex justify-between items-center mb-10">
				<h1 className="text-light-very-light-gray text-3xl lg:text-4xl tracking-[15px] font-bold">TODO</h1>
				<ThemeSwitchBtn />
			</div>
			<ToDoForm onSubmit={createTask} />
			<ToDoList tasksList={tasksList} setTasksList={setTasksList} />
		</main>
	);
};

export default ToDoMain;
