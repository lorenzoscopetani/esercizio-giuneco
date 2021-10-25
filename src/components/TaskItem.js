import React, { useState } from 'react';
import TaskControls from './TaskControls';

const TaskItem = ({ task }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={`task-item ${task.state}`}>
			<h4 onClick={() => setIsOpen(!isOpen)}>{task.name}</h4>
			{isOpen && (
				<div>
					<p>{task.description}</p>
					<p>{task.time} ora/e</p>
					<TaskControls task={task} />
				</div>
			)}
		</div>
	);
};

export default TaskItem;
