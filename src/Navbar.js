import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ dogs }) => (
	<nav className="Navbar">
		<NavLink exact to="/dogs" key="home" className="Navbar-link">
			Home
		</NavLink>
		{dogs.map((dog) => (
			<NavLink exact to={`/dogs/${dog.src}`} key={dog.src} className="Navbar-link">
				{dog.name}
			</NavLink>
		))}
	</nav>
);

export default Navbar;
