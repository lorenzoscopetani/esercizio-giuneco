import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Navbar from '../components/Navbar';
import AddTask from '../components/AddTask';
import TaskItem from '../components/TaskItem';
import Header from '../components/Header';

const Completed = () => {
	const { completedTask } = useContext(GlobalContext);
	return (
		<div className="container">
			<Header />
			<Navbar active={'completed'} />
			<AddTask />
			<div className="task-list">
				{completedTask.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Completed;
