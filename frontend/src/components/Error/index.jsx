import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();
    return (
			<main>
				<article className="error">
					<h1 className="error__title">404</h1>
					<p className="error__text">
						Oups! La page que vous demandez n'existe pas.
					</p>
					<NavLink to="/" id="return-home__link">
						Retourner sur la page d'accueil
					</NavLink>
					<i>{error.statusText || error.message}</i>
				</article>
			</main>
		);
};

export default Error;