import React from 'react';
// import de composants depuis la bibliothèque React pour créer la navigation :
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import des composants pour le routeur :
import Home from '../pages/Home';
import About from '../pages/About';
import Error404 from '../pages/Error404';

const App = () => {
	return (
		// Création du routeur de navigation :
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
