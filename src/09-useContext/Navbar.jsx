import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
	const handleActive = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`

	const navLinks = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'About',
			path: 'about',
		},
		{
			name: 'Login',
			path: 'login',
		},
	]

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded-3'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					useContext
				</Link>

				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						{navLinks.map(({ name, path }) => (
							<NavLink key={name} to={path} className={handleActive}>
								{name}
							</NavLink>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}
