import React from 'react';
import LodgingsData from '../data/logements.json';
import Card from './Card';

const Gallery = () => {
	return (
		<section className="gallery">
			{LodgingsData.map((lodging) => (
				<Card key={lodging.id} title={lodging.title} cover={lodging.cover} id={lodging.id} />
			))}
		</section>
	);
};

export default Gallery;
