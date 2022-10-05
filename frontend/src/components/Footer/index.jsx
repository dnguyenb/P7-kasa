import React from 'react';
import { NavLink } from 'react-router-dom';
import Logowhite from '../../assets/logowhite.png';

const Footer = () => {
	return (
		<footer>
			<NavLink to="/" className="footer__logo">
				<img src={Logowhite} alt="Logo Kasa" />
			</NavLink>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
