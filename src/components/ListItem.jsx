import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import Check from "./Check";
import CloseButton from "./CloseButton";

const ListItem = ({ task, index, removeTask, markAsCompleted }) => {
	const listItemClasses =
		"px-6 w-full flex items-center gap-3 lg:gap-6 hover-reveal bg-inherit first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md border-b border-light-very-light-grayish-blue dark:border-dark-extra-dark-grayish-blue last:border-none cursor-pointer";

	return (
		<Draggable draggableId={task.id.toString()} index={index}>
			{(provided) => {
				return (
					<li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={listItemClasses}>
						<Check isChecked={task.completed} onClick={() => markAsCompleted(task)} />
						<p
							className={`flex-1 bg-inherit py-3.5 lg:py-5 text-sm 
                ${
									task.completed
										? "line-through text-light-light-grayish-blue dark:text-dark-very-dark-grayish-blue"
										: "text-light-very-dark-grayish-blue dark:text-dark-light-grayish-blue"
								}`}>
							{task.text}
						</p>
						<CloseButton onClick={() => removeTask(task.id)} />
					</li>
				);
			}}
		</Draggable>
	);
};

export default ListItem;
