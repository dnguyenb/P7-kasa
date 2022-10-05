import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Lodgings from '../data/lodgings';
import Lodging from '../components/Lodging';

const Home = () => {
	return (
		<div>
			<Header />
			<main>
				{Lodgings.map((lodging) => (
					<Lodging
						key={lodging.id}
						titre={lodging.title}
						cover={lodging.cover}
						idLodging={lodging.id}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
};

export default Home;
