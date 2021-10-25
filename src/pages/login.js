import React, { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { login } = useContext(GlobalContext);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch {
			setError('Failed to login');
		}

		setLoading(false);
	}

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h1>Log In</h1>
				{error && <p>{error}</p>}
				<div className="form-group">
					<label id="email">Email</label>
					<input type="email" ref={emailRef} required />
				</div>
				<div className="form-group">
					<label id="password">Password</label>
					<input type="password" ref={passwordRef} required />
				</div>
				<button disabled={loading}>Log In</button>
				<p>
					Need an account? <Link to="/signup">Sign Up</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
