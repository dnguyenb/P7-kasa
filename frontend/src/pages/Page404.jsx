import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Page404 = () => {
	return (
		<div>
			<Header />
			<main>
				<article className="error">
					<h2 className="error__title">404</h2>
					<p className="error__text">
						Oups! La page que vous demandez n'existe pas.
					</p>
					<NavLink to="/" className="home-link">
						Retourner sur la page d'accueil
					</NavLink>
				</article>
			</main>
		</div>
	);
};

export default Page404;
