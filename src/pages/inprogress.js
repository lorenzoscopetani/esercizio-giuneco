import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Navbar from '../components/Navbar';
import AddTask from '../components/AddTask';
import TaskItem from '../components/TaskItem';
import Header from '../components/Header';

const Inprogress = () => {
	const { inProgressTask } = useContext(GlobalContext);
	return (
		<div className="container">
			<Header />
			<Navbar active={'inprogress'} />
			<AddTask />
			<div className="task-list">
				{inProgressTask.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</div>
		</div>
	);
};

export default Inprogress;
