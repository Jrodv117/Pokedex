import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useState } from 'react';

const RegisterComponent = ({ setUser }) => {
	const [currentForm, setCurrentForm] = useState('login');

	function handleClick() {
		if (currentForm === 'login') {
			setCurrentForm('signup');
		} else {
			setCurrentForm('login');
		}
	}

	return (
		<main>
			<h3 className="h3">
				<button
					onClick={handleClick}
					type="submit"
					className="btn btn-primary btn-lg btn-block"
				>
					{currentForm === 'login' ? 'Sign Up' : 'Log In'}
				</button>
			</h3>
			{currentForm === 'login' ? (
				<LoginForm setUser={setUser} />
			) : (
				<RegisterForm setUser={setUser} />
			)}
		</main>
	);
};
export default RegisterComponent;
