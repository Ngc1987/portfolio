import React from 'react';
import "./WorkSample.scss";
import StyledDiv from '../StyledDiv/StyledDiv';
import { ImGithub } from 'react-icons/im';
import { GiEarthAmerica } from 'react-icons/gi';


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
					<ImGithub/>
					<a href={githubLink}>GitHub repo</a>
				</div>
				<div className="workSample__links-liveDemo">
					<GiEarthAmerica/>
					<a href={liveDemoLink}>{liveDemoLink.includes("npmjs") ? "Npm repo" : "Live demo"}</a>
				</div>
			</div>
		</article>
	)
}

export default WorkSample;