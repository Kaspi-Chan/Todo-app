import React, { useEffect, useState } from "react";
import ThemeSwitchBtn from "./ThemeSwitchBtn";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { db } from "../firebase";
import { addDoc, collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import Profile from "./Profile";

const ToDoMain = () => {
	const [tasksList, setTasksList] = useState([]);
  const {user} = UserAuth()

	const createTask = async (inputValue) => {
    if(!user){
      window.alert('Please log in to create tasks!')
      return
    };

		if (inputValue.trim() === "") {
			alert("Please enter a valid task!");
			return;
		}

		if (tasksList.length === 10) {
			alert("You have reached the maximum number of items allowed.");
			return;
		}

		const querySnapshot = await getDocs(query(collection(db, "todos"), where('userId', '==', user.uid), orderBy("order", "desc"), limit(1)));
		let highestOrder = 0;

		// If there are existing tasks, set the highest order to the highest current order plus one.
		querySnapshot.forEach((doc) => {
			highestOrder = doc.data().order + 1;
		});

		await addDoc(collection(db, "todos"), {
      userId: user.uid,
			text: inputValue,
			completed: false,
			order: highestOrder,
		});
	};

	return (
		<main className="mx-auto max-w-[320px] sm:max-w-[420px] lg:max-w-[540px] relative z-10 pt-14 pb-5">
			<div className="flex justify-between items-center mb-10">
				<h1 className="text-light-very-light-gray text-3xl lg:text-4xl tracking-[15px] font-bold">TODO</h1>
        <div className="flex items-center gap-3">
          <Profile />
          <ThemeSwitchBtn />
        </div>
			</div>
			<ToDoForm onSubmit={createTask} />
			<ToDoList tasksList={tasksList} setTasksList={setTasksList} />
		</main>
	);
};

export default ToDoMain;
