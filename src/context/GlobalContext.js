import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);
	const [backlogTask, setBacklogTask] = useState(
		localStorage.getItem('backlogTask')
			? JSON.parse(localStorage.getItem('backlogTask'))
			: []
	);
	const [inProgressTask, setInProgressTask] = useState(
		localStorage.getItem('inProgressTask')
			? JSON.parse(localStorage.getItem('inProgressTask'))
			: []
	);
	const [completedTask, setCompletedTask] = useState(
		localStorage.getItem('completedTask')
			? JSON.parse(localStorage.getItem('completedTask'))
			: []
	);

	useEffect(() => {
		localStorage.setItem('backlogTask', JSON.stringify(backlogTask));
	}, [backlogTask]);

	useEffect(() => {
		localStorage.setItem('inProgressTask', JSON.stringify(inProgressTask));
	}, [inProgressTask]);

	useEffect(() => {
		localStorage.setItem('completedTask', JSON.stringify(completedTask));
	}, [completedTask]);

	const signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
	};

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const logout = () => {
		return auth.signOut();
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		backlogTask,
		inProgressTask,
		completedTask,
		signup,
		login,
		logout,
		setBacklogTask,
		setInProgressTask,
		setCompletedTask,
	};

	return (
		<GlobalContext.Provider value={value}>
			{!loading && children}
		</GlobalContext.Provider>
	);
};
