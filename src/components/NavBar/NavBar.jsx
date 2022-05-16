import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import * as userService from '../../utilities/users-service';

// const navBarStyle = styled.nav`
// `
const NavBar = ({ user, setUser }) => {
	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}
	return (
		<nav className="navbar navbar-expand-md navbar-dark">
			<Link to="/">Dashboard</Link>
			&nbsp; | &nbsp;
			<Link to="/details">Details</Link>
			&nbsp; | &nbsp;
			<span> Welcome, {user.name} </span>
			{console.log(user)}
			&nbsp; | &nbsp;
			<Link to="" onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
};

export default NavBar;
