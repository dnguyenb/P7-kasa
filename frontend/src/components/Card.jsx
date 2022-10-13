import React from 'react';

const Card = ({ cover, title }) => {
	return (
		<div className="lodging-card">
			<h3 className="lodging-title">{title}</h3>
			<img src={cover} alt={title} />
		</div>
	);
};

export default Card;
