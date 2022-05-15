import RegisterForm from '../../components/RegisterForm/RegisterForm';
const Register = ({ setUser }) => {
	return (
		<main>
			<RegisterForm setUser={setUser} />
		</main>
	);
};
export default Register;
