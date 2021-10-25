import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ active }) => {
	return (
		<nav>
			<ul>
				<li className={active === 'inprogress' ? 'active' : ''}>
					<Link to={'/'}>In progress</Link>
				</li>
				<li className={active === 'backlog' ? 'active' : ''}>
					<Link to={'/backlog'}>Backlog</Link>
				</li>
				<li className={active === 'completed' ? 'active' : ''}>
					<Link to={'/completed'}>Completed</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
