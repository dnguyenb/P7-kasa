import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LodgingsData from '../data/logements.json';

const Slideshow = () => {
	const { id } = useParams(); // Récupère l'id du logement dans le paramètre dynamique de l'URL.

	// Retrouve les infos du logement dans le tableau logements.json
	const { pictures } = LodgingsData.find((l) => l.id === id);

	// useState définit l'image initiale = 0. setCurrent est la fonction qui modifie le state "current".
	const [current, setCurrent] = useState(0);

	// Si la photo est la dernière (-1), alors retour à la photo initiale (0). Sinon, passe à la suivante (+1).
	const nextSlide = () => {
		setCurrent(current === pictures.length - 1 ? 0 : current + 1);
	};

	/* Si l'image est la première de la liste alors retour à la dernière image */
	// Si la photo est la première (0), alors on passe à la dernière. Sinon, on passe à la précédente (-1).
	const prevSlide = () => {
		setCurrent(current === 0 ? pictures.length - 1 : current - 1);
	};

	return (
		<section id="slideshow">
			{/* Tant qu'il y a plus d'une image, affiche les chevrons */}
			{pictures.length > 1 && (
				<i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
			)}
			{pictures.length > 1 && (
				<i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
			)}

			{/**
			 * map() crée un nouveau tableau basé sur l'index des photos de chaque logement.
			 * On récupère dans l'index, la photo à afficher
			 * Puis, pour l'affichage du nombre de photos : Current +1 pour commencer l'affichage à 1 et length pour afficher le nombre total d'images
			 */}
			{pictures.map((picture, index) => {
				return (
					<div key={index}>
						{index === current && (
							<img
								src={picture}
								alt={pictures.description}
								className="slideshow__picture"
							/>
						)}
						{index === current && (
							<span className="slideshow__picture-nbr">
								{current + 1}/{pictures.length}
							</span>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default Slideshow;
