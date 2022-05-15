import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
	// class field syntax
	state = {
		name: '',
		email: '',
		password: '',
		confirm: '',
		error: '',
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			// We don't want to send the confirm or error properties
			// Let's make a copy of this.state (we never want to directly modify the state obj)
			const formData = { ...this.state };
			delete formData.error;
			delete formData.confirm;
			const user = await signUp(formData);
			this.props.setUser(user);
		} catch {
			// An error occurred
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
	};

	handleChange = (evt) => {
		// Unlike setters in function components,
		// this.setState MERGES the provided object, it does
		// NOT replace it
		this.setState({
			[evt.target.name]: evt.target.value,
			error: '',
		});
	};

	// Must override the render method
	// The render method take the place of a function component
	// That is, it will ultimately return its UI as JSX
	render() {
		const disable = this.state.password !== this.state.confirm;
		return (
			<div className="container-fluid bg">
				<div className="row">
					<div className="col-12 col-sm-7 col-md-3 form-row">
						<form
							className="form-container"
							autoComplete="off"
							onSubmit={this.handleSubmit}
						>
							<label className="form-text">Email</label>
							<input
								className="form-control"
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
								required
							/>
							<label className="form-text">Password</label>
							<input
								className="form-control"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							<label className="form-text">Confirm</label>
							<input
								className="form-control"
								type="password"
								name="confirm"
								value={this.state.confirm}
								onChange={this.handleChange}
								required
							/>
							<button
								type="submit"
								disabled={disable}
								className="btn btn-primary btn-block"
							>
								SIGN UP
							</button>
						</form>
					</div>
				</div>
				<p className="error-message">&nbsp;{this.state.error}</p>
			</div>
		);
	}
}
