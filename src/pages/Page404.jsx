import React from 'react';
import { NavLink } from 'react-router-dom';

const Page404 = () => {
	return (
			<main>
				<article className="error">
					<h1 className="error__title">404</h1>
					<p className="error__text">
						Oups! La page que vous demandez n'existe pas.
					</p>
					<NavLink to="/" className="home-link">
						Retourner sur la page d'accueil
					</NavLink>
				</article>
			</main>
	);
};

export default Page404;
