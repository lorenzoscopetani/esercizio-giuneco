import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Navbar from '../components/Navbar';
import AddTask from '../components/AddTask';
import TaskItem from '../components/TaskItem';
import Header from '../components/Header';

const Backlog = () => {
	const { backlogTask } = useContext(GlobalContext);
	return (
		<div className="container">
			<Header />
			<Navbar active={'backlog'} />
			<AddTask />
			<div className="task-list">
				{backlogTask.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Backlog;
