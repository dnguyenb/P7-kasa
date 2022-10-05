import React from 'react';
import aboutbannermobile from '../../assets/banner-about-mobile.png';
const BannerAbout = () => {
	return (
		<div className="banner-about">
			<img
				src={aboutbannermobile}
				alt="Paysage de montagnes"
				className="banner-about__img"
			/>
		</div>
	);
};

export default BannerAbout;
