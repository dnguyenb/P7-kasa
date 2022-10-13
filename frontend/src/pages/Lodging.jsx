import React from 'react'; // useEffect pour lancer au démarrage, useState pour définir le composant.
import { useParams } from 'react-router-dom';
import LodgingsData from '../data/logements.json';
import Slideshow from '../components/Slideshow';

const Lodging = () => {
	// const [lodgingData, setLodgingData] = useState({}); // Tout ce qui change doit être mis dans un state. ({}) = initialement ne contient rien. setLodgingData est la fonction qui modifie le state de la variable lodgingData.

	const { id } = useParams();

		const lodgingInfos = LodgingsData.find((l) => l.id === id);

		// 	setLodgingData(currentLodging);
		// }, []); // Tableau vide => Pour lancer une seule fois au démarrage du composant.

		const { title, location, tags, host, rating, description, equipments } =
			lodgingInfos;

		const range = [1, 2, 3, 4, 5];

		return (
			<main>
				<Slideshow />
				<div className="intro">
					<div>
						<h1 className="intro__title">{title}</h1>
						<h2 className="intro__location">{location}</h2>
						<div className="tags">
							{tags.map((tag) => {
								return (
									<span key={`${tag}`} className="tag">
										{tag}
									</span>
								);
							})}
						</div>
					</div>

					{/* Utilisation de la méthode map pour afficher les étoiles données au logement en utilisant un tableau de 1 à 5 */}
					<div className="host">
						<div className="host__rate">
							{range.map((rangeElem) =>
								rating >= rangeElem ? (
									<svg
										key={rangeElem.toString()}
										className="star"
										viewBox="0 0 30 30"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											className="star--red"
											d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
										/>
									</svg>
								) : (
									<svg
										key={rangeElem.toString()}
										className="star"
										viewBox="0 0 30 30"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											className="star--grey"
											d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
										/>
									</svg>
								)
							)}
						</div>

						<div className="host__info">
							<p className="host__info-name">{host.name}</p>
							<img className="host__info-picture" src={host.picture} alt="{host.name}" />
						</div>
					</div>
				</div>

				<div className="lodging-info">

					<details className="lodging-info__details">
						<summary className="lodging-info__title">
							Description <i className="fa-solid fa-chevron-down"></i>
						</summary>
						<p className="lodging-info__text">{description}</p>
					</details>

					<details className="lodging-info__details">
						<summary className="lodging-info__title">
							Equipements <i className="fa-solid fa-chevron-down"></i>
						</summary>
						<ul className="lodging-info__text">
							{equipments.map((equipment) => {
								return <li key={`${equipment}`}> {equipment}</li>;
							})}
						</ul>
					</details>
				</div>
			</main>
		);
	};

export default Lodging;

		// <div className="lodging-page">
			
		// 	<Slideshow title={lodgingData.title} cover={lodgingData.cover} />

		// 	<div className="infos">
		// 		<div className="title-location">
		// 			<h2>{lodgingData.title}</h2>
		// 			<p>{lodgingData.location}</p>
		// 		</div>

		// 		{/* <div className="host">
		// 			<div className="host-name">{lodgingData.host.name}</div>
		// 			<img src={lodgingData.host.picture} alt={lodgingData.host.name} />
		// 		</div> */}
		// 	</div>
		// 	{JSON.stringify(lodgingData)}
		// </div>