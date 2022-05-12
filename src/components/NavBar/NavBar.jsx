import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<nav>
			<Link to="/dashboard">Dashboard</Link>
			&nbsp; | &nbsp;
			<Link to="/details">Details</Link>
		</nav>
	);
};
export default NavBar;
