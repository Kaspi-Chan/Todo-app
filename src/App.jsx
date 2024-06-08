import ToDoMain from "./components/ToDoMain";
import { UserAuth } from "./context/AuthContext";


function App() {
  const {user} = UserAuth();
	return (
		<div className="w-full min-h-screen h-full relative">
      {user ? <span className="absolute right-0 w-max text-stone-300 text-sm z-10 p-2">*Click user Icon to log out</span> : ''}
			<div className="bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark w-full h-[300px] absolute top-0 left-0 bg-cover"></div>
			<div className="w-full min-h-screen h-full bg-light-very-light-gray dark:bg-dark-very-dark-blue absolute -z-10"></div>
			<ToDoMain />
		</div>
	);
}

export default App;
