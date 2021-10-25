import React, { useState, useRef, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const AddTask = () => {
	const [isOpen, setIsOpen] = useState(false);
	const taskNameRef = useRef();
	const taskTimeRef = useRef();
	const taskDescRef = useRef();
	const { backlogTask, setBacklogTask } = useContext(GlobalContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setBacklogTask([
			...backlogTask,
			{
				id: Math.random() * 1000,
				name: taskNameRef.current.value,
				time: taskTimeRef.current.value,
				description: taskDescRef.current.value,
				state: 'backlog',
			},
		]);
		setIsOpen(false);
	};

	return (
		<>
			<button onClick={() => setIsOpen(true)} className="add-task__btn">
				Add new task <i className="fas fa-plus"></i>
			</button>
			{isOpen && (
				<>
					<div className="background" onClick={() => setIsOpen(false)} />
					<div className="add-task__window">
						<form onSubmit={handleSubmit}>
							<h2>New Task</h2>
							<div className="form-group">
								<label id="task-name">Name</label>
								<input type="text" ref={taskNameRef} required />
							</div>
							<div className="form-group">
								<label id="time">Time</label>
								<input
									type="number"
									name="time"
									id="time"
									ref={taskTimeRef}
									required
								/>
							</div>
							<div className="form-group">
								<label id="description">Description</label>
								<input
									type="text"
									id="description"
									ref={taskDescRef}
									required
								/>
							</div>
							<button>Add</button>
							<p onClick={() => setIsOpen(false)}>Close</p>
						</form>
					</div>
				</>
			)}
		</>
	);
};

export default AddTask;
