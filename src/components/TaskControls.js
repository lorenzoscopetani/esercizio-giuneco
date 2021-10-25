import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TaskControls = ({ task }) => {
	const {
		backlogTask,
		setBacklogTask,
		inProgressTask,
		setInProgressTask,
		completedTask,
		setCompletedTask,
	} = useContext(GlobalContext);

	const moveToInProgress = () => {
		setInProgressTask([...inProgressTask, task]);
		task.state = 'inprogress';
		setBacklogTask(backlogTask.filter((item) => item.id !== task.id));
		setCompletedTask(completedTask.filter((item) => item.id !== task.id));
	};

	const moveToCompleted = () => {
		setCompletedTask([...completedTask, task]);
		task.state = 'completed';
		setInProgressTask(inProgressTask.filter((item) => item.id !== task.id));
		setBacklogTask(backlogTask.filter((item) => item.id !== task.id));
	};

	return (
		<div className="task-controls">
			{task.state === 'backlog' && (
				<p className="task-inprogress" onClick={moveToInProgress}>
					set in progress
				</p>
			)}
			{task.state === 'inprogress' && (
				<p className="task-completed" onClick={moveToCompleted}>
					set completed
				</p>
			)}
			{task.state === 'completed' && (
				<p className="task-inprogress" onClick={moveToInProgress}>
					set in progress
				</p>
			)}
		</div>
	);
};

export default TaskControls;
