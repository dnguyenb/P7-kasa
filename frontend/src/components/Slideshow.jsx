import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LodgingsData from '../data/logements.json';
import Card from './Card';

const Slideshow = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { id } = useParams();

	return (
		<section className="slideshow">
			{LodgingsData.map((lodging) => (
				<Card
					key={lodging.id}
					title={lodging.title}
					cover={lodging.cover}
					idLodging={lodging.id}
				/>
			))}
		</section>
	);
};

export default Slideshow;
