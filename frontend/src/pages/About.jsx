import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

const About = () => {
	return (
		<div>
			<Banner />
			<section>
				<div className="about-container">
					<Collapse
						className="about-element"
						label="Fiabilité"
						content={`

								Les annonces postées sur Kasa garantissent une fiabilité totale.
								Les photos sont conformes aux logements, et toutes les
								informations sont régulièrement vérifiées par nos équipes.`}
					/>
					<Collapse
						className="about-element"
						label="Respect"
						content={`
							
								La bienveillance fait partie des valeurs fondatrices de Kasa.
								Tout comportement discriminatoire ou de perturbation du
								voisinage entraînera une exclusion de notre plateforme.`}
					/>
					<Collapse
						className="about-element"
						label="Service"
						content={`Nos équipes se tiennent à votre disposition pour vous fournir
								une expérience parfaite. N'hésitez pas à nous contacter si vous
								avez la moindre question.`}
					/>
					<Collapse
						className="about-element"
						label="Responsabilité"
						content={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
								que pour les voyageurs, chaque logement correspond aux critères
								de sécurité établis par nos services. En laissant une note aussi
								bien à l'hôte qu'au locataire, cela permet à nos équipes de
								vérifier que les standards sont bien respectés. Nous organisons
								également des ateliers sur la sécurité domestique pour nos
								hôtes.`}
					/>
				</div>
			</section>
		</div>
	);
};

export default About;
