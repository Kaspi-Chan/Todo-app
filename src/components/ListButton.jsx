const ListButton = ({ id, onClick, buttonClasses, clickedBtn, children }) => {
	return (
		<button onClick={onClick} className={`${buttonClasses.base} ${clickedBtn === id ? buttonClasses.active : ""}`}>
			{children}
		</button>
	);
};

export default ListButton;
