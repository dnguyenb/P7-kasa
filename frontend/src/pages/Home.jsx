import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Header />
			<main>
				<Banner />
				<Slideshow />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
