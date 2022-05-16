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
		<div className="NavBarDiv">
			<nav className="navbar navbar-expand-md navbar-dark">
				<Link to="/" className="link">
					Dashboard
				</Link>
				&nbsp; | &nbsp;
				<span> Pokemon Trainer: {user.name} </span>
				{console.log(user)}
				&nbsp; | &nbsp;
				<Link to="" className="link" onClick={handleLogOut}>
					Log Out
				</Link>
			</nav>
		</div>
	);
};

export default NavBar;
