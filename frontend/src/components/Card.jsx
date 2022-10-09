import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const detail = `/lodging/${props.idLodging}`;
	return (
		<Link to={detail} className="lodging-card">
			<h3 className="lodging-title">{props.title}</h3>
			<img src={props.cover} alt={props.title} />
		</Link>
	);
};

export default Card;
