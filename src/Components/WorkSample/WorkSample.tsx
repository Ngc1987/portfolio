import React from 'react';
import "./WorkSample.scss";
import { ImGithub } from 'react-icons/im';
import { GiEarthAmerica } from 'react-icons/gi';
import { WorkSampleProps } from '../../Datas/WorkSampleDatas';


const WorkSample:React.FC<WorkSampleProps> = ({title, image, description, githubLink, liveDemoLink, inProgress}) => {
	
	return (
		<article className="workSample" data-testid="workSample">
			<div className="workSample__title">
				<h2>{title}</h2>
			</div>
			<div className="workSample__image">
				{inProgress ? 
				<>
					<ul className="inProgress__loader" >
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<p className="inProgress__text">In progress...</p>
				</>
					:
					<img src={image} alt={`Sample pic of ${title} website`} />
				}
			</div>
			<div className="workSample__description">
				<p>{description}</p>
			</div>
			<div className="workSample__links">

				{
					githubLink === "" ?
					<></>
					:
					<div className="workSample__links-liveDemo">
						<ImGithub/>
						<a href={githubLink}>GitHub repo</a>
					</div>
				}
				{
					liveDemoLink === "" ?
					<></>
					:
					<div className="workSample__links-liveDemo">
						<GiEarthAmerica/>
						<a href={liveDemoLink}>{liveDemoLink.includes("npmjs") ? "Npm repo" : "Live demo"}</a>
					</div>
				}
			</div>
		</article>
	)
}

export default WorkSample;