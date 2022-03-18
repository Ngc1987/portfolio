import React from 'react';
import "./WorkSample.scss";
import StyledDiv from '../StyledDiv/StyledDiv';

interface Props {
	title: string;
	image: string;
	description: string;
	liveDemoLink: string;
	githubLink: string;
}

const WorkSample:React.FC<Props> = ({title, image, description, githubLink, liveDemoLink}) => {
	return (
		<article className="workSample">
			<div className="workSample__title">
				<h2>{title}</h2>
			</div>
			<div className="workSample__image">
				<img src={image} alt={`Sample pic of ${title} website`} />
			</div>
			<div className="workSample__description">
				<p>{description}</p>
			</div>
			<div className="workSample__links">
				<div className="workSample__links-github">
					<a href={githubLink}>Lien GitHub</a>
				</div>
				<div className="workSample__links-liveDemo">
					<a href={liveDemoLink}>Live Démo</a>
				</div>
			</div>
		</article>
	)
}

export default WorkSample;