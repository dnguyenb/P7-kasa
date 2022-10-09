import React from 'react';
import BannerHome from '../assets/banner-home.png';
import BannerAbout from '../assets/banner-about.png';

const Banner = () => {
	// Affichage de l'image bannière selon l'URL de la page :
	const urlHome = document.location.pathname === '/';
	const bannerImgSwitch = urlHome ? BannerHome : BannerAbout;
	const bannerAltSwitch = urlHome ? 'Paysage côtier' : 'Paysage de montagne';

	return (
		<div className="banner">
			<img
				src={bannerImgSwitch}
				alt={bannerAltSwitch}
				className="banner__img"
			/>
			{urlHome && <h2 className="banner__text">Chez vous, partout et ailleurs</h2>}
		</div>
	);
};

export default Banner;
