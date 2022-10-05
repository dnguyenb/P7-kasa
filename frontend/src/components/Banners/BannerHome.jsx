import React from 'react';
import banner from '../../assets/banner-home.png';

const BannerHome = () => {
	return (
		<div className="banner-home">
			<img
				src={banner}
				alt="Photo d'un payasage côtier"
				className="banner-home__img"
			/>
			<p className="banner-home__text">Chez vous, partout et ailleurs</p>
		</div>
	);
};

export default BannerHome;
