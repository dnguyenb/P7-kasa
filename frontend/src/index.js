import React from 'react';
import ReactDOM from 'react-dom/client';
// import de composants depuis la bibliothèque React pour créer la navigation :
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import des pages pour le routeur :
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
