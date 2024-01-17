import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cover, title, id }) => {
	return (
		<Link to={`/lodging/${id}`} className="lodging-card">
			<img src={cover} alt={title} />
			<h3 className="lodging-title">{title}</h3>
		</Link>
	);
};

export default Card;
