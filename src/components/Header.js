import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const { currentUser, logout } = useContext(GlobalContext);
	const history = useHistory();
	const [error, setError] = useState('');

	const handleLogout = async () => {
		try {
			setError('');
			await logout();
			history.push('/login');
		} catch {
			setError('Failed to log out');
		}
	};

	return (
		<header>
			<p className="header__username">
				Hi <span>{currentUser.email}</span>!
			</p>
			<p className="header__logout" onClick={handleLogout}>
				Logout
			</p>
			{error && <p>{error}</p>}
		</header>
	);
};

export default Header;
