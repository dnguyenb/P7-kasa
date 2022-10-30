import React from 'react'; // useEffect pour lancer au démarrage, useState pour définir le composant.
import { useParams } from 'react-router-dom';
import LodgingsData from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';

const Lodging = () => {

	const { id } = useParams();

	const lodgingInfos = LodgingsData.find((l) => l.id === id);

	const { title, location, tags, host, rating, description, equipments } =
		lodgingInfos;

	// tableau pour le nombre d'étoiles attribuées :
	const range = [1, 2, 3, 4, 5];

	return (
		<main>
			<Slideshow />

			{/* TITRE, LIEUX ET ETIQUETTES */}
			<div className="intro">
				<div className="intro__container">
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

				{/* ANNONCEUR + ETOILES */}

				{/* Annonceur */}
				<div className="host">
					<div className="host__info">
						<p className="host__info-name">{host.name}</p>
						<img
							className="host__info-picture"
							src={host.picture}
							alt="{host.name}"
						/>
					</div>

					{/* Etoiles */}
					<div className="host__rate">
						{/* map() sur la variable "range" pour afficher les étoiles attribuées (pleines ouvides) */}
						{range.map((rangeElem) =>
							rating >= rangeElem ? (
								<svg
									key={rangeElem.toString()}
									className="star"
									viewBox="0 0 30 30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										className="star--filled"
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
										className="star--empty"
										d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
									/>
								</svg>
							)
						)}
					</div>
				</div>
			</div>

			{/* DESCRIPTION + EQUIPEMENTS */}
			<div className="lodging-info">
				{/* Description */}
				<Collapse
					className="lodging-info__details"
					label="Description"
					content={description}
				/>

				{/* Equipements */}
				<Collapse
					className="lodging-info__details"
					label="Equipements"
					content={
						<ul className="lodging-info__list">
							{equipments.map((equipment) => {
								return <li key={`${equipment}`}> {equipment}</li>;
							})}
						</ul>
					}
				/>
			</div>
		</main>
	);
};

export default Lodging;
