import React from 'react';
import LogoWhite from '../assets/img/Logo-white.png';

const Footer = () => {
	return (
		<footer>
			<div className="footer__logo">
				<img src={LogoWhite} alt="Logo Kasa" />
			</div>
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;
