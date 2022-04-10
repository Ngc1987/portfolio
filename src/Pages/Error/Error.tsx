import React from 'react';
import { Link } from "react-router-dom";
import "./Error.scss";

const Error = () => {
	return (
		<section className="error404">

			<>
				<p className="error404__number">404</p>
				<div className="error404__phrase">
					<p>Oups ! La page que </p>
					<p>vous demandez n'existe pas</p>
				</div>
			</>

			<Link to="/" >
				<p className="error404__homeLink">Retourner sur la page d'accueil</p>
			</Link>

		</section>
	)
}

export default Error