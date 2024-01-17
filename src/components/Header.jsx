import React from 'react';
// NavLink correspond à "href" pour créer des ancres :
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
	return (
		<header>
			<div className="header-logo">
				<img src={Logo} alt="logo Kasa" />
			</div>

			<nav>
				<ul className="nav-links">
					<NavLink
						to="/"
						end
						className={(link) => (link.isActive ? 'nav-links--active' : null)}
					>
						<li>Accueil</li>
					</NavLink>

					<NavLink
						to="/about"
						className={(link) => (link.isActive ? 'nav-links--active' : null)}
					>
						<li>A Propos</li>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
