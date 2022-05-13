import RegisterForm from '../../components/RegisterForm/RegisterForm';
const Register = ({ setUser }) => {
	return (
		<main>
			<h1>Register</h1>
			<RegisterForm setUser={setUser} />
		</main>
	);
};
export default Register;
