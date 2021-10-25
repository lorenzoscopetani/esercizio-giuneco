import React, { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const Signup = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const { signup } = useContext(GlobalContext);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			setError('Password do not match');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch {
			if (passwordRef.current.value.length < 6) {
				setError('Password should be at least 6 characters');
			} else {
				setError('Failed to create an account');
			}
		}

		setLoading(false);
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				{error && <p>{error}</p>}
				<div className="form-group">
					<label id="email">Email</label>
					<input type="email" ref={emailRef} required />
				</div>
				<div className="form-group">
					<label id="password">Password</label>
					<input type="password" ref={passwordRef} required />
				</div>
				<div className="form-group">
					<label id="confirm-password">Confirm Password</label>
					<input type="password" ref={passwordConfirmRef} required />
				</div>
				<button disabled={loading}>Sign Up</button>
				<p>
					Already have an account? <Link to="/login">Log In</Link>
				</p>
			</form>
		</div>
	);
};

export default Signup;
