import React from 'react';
import { NavLink } from 'react-router-dom';

const Lodging = (props) => {
	const detail = `/lodging/${props.idLodging}`;
	return (
		<NavLink to={detail} className="lodging-card">
			<div className="lodging-title">{props.titre}</div>
			<img src={props.cover} alt={props.titre} />
		</NavLink>
	);
};

export default Lodging;
