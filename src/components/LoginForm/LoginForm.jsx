import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function LoginForm({ setUser }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<div className="container-fluid bg" onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-12 col-sm-7 col-md-3">
					<form
						autoComplete="off"
						className="form-container"
						onSubmit={handleSubmit}
					>
						<label className="form-text">Email</label>
						<input
							className="form-control"
							type="text"
							name="email"
							value={credentials.email}
							onChange={handleChange}
							required
						/>
						<label className="form-text">Password</label>
						<input
							className="form-control"
							type="password"
							name="password"
							value={credentials.password}
							onChange={handleChange}
							required
						/>
						<button type="submit">LOG IN</button>
					</form>

					<p className="error-message">&nbsp;{error}</p>
				</div>
			</div>
		</div>
	);
}
