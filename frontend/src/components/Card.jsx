import React from 'react';

const Card = ({ cover, title }) => {
	return (
		<div className="lodging-card">
			<img src={cover} alt={title} />
			<h3 className="lodging-title">{title}</h3>
		</div>
	);
};

export default Card;
