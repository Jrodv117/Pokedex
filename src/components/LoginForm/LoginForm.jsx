import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

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
		<div className="container-fluid" onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-12 col-sm-6 col-md-3">
					<form autoComplete="off" autoCapitalize="off">
						<label>Email</label>
						<input
							type="text"
							name="email"
							value={credentials.email}
							onChange={handleChange}
							required
						/>
						<small id="emailHelp" class="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
						;<label>Password</label>
						<input
							type="password"
							name="password"
							value={credentials.password}
							onChange={handleChange}
							required
						/>
						<button type="submit">LOG IN</button>
					</form>
				</div>
			</div>
		</div>
	);
}
