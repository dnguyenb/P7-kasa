import React from 'react';
// import de composants depuis la bibliothèque React pour créer la navigation :
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import des pages pour le routeur :
import Home from '../pages/Home';
import Lodging from '../pages/Lodging';
import About from '../pages/About';
import Page404 from '../pages/Page404';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lodging/:id" element={<Lodging />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
