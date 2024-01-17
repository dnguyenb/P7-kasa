import React, { useState } from 'react';

const Collapse = (props) => {
	// Set the Collapse component to "closed" with useState :
	const [open, setOpen] = useState(false);

	// function to switch open/close :
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<div className="collapse">
			<div className="collapse__button" onClick={toggle}>
				<div>
					{' '}
					<p>{props.label}</p>{' '}
				</div>
				{open ? (
					<i className="fa-solid fa-chevron-up"></i>
				) : (
					<i className="fa-solid fa-chevron-down"></i>
				)}
			</div>
			{open && <div className="collapse__text"> <p>{props.content}</p></div>}
		</div>
	);
};

export default Collapse;
