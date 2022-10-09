import React from 'react';
import { Link } from 'react-router-dom';
import LogoFooter from '../assets/logo-footer.png';

const Footer = () => {
	return (
		<footer>
			<Link to="/" className="footer__logo">
				<img src={LogoFooter} alt="Logo Kasa" />
			</Link>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
