import React from 'react';
import { Link } from 'react-router-dom';
import LodgingsData from '../data/logements.json';
import Card from './Card';

const Gallery = () => {
	return (
		<section className="gallery">
			{LodgingsData.map((lodging) => (
				<Link key={lodging.id} to={`/lodging/${lodging.id}`} className="lodging-card">
					<Card
						key={lodging.id}
						title={lodging.title}
						cover={lodging.cover}
					/>
				</Link>
			))}
		</section>
	);
};

export default Gallery;
