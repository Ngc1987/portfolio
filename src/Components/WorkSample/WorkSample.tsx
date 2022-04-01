import React from 'react';
import "./WorkSample.scss";
import { ImGithub } from 'react-icons/im';
import { GiEarthAmerica } from 'react-icons/gi';
import { WorkSampleProps } from '../../Datas/WorkSampleDatas';


const WorkSample:React.FC<WorkSampleProps> = ({title, image, description, githubLink, liveDemoLink, inProgress}) => {
	
	return (
		<article className="workSample" data-testid="workSample">
			<div className="workSample__title">
				<h2 tabIndex={0}>{title}</h2>
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
					<img src={image} alt={`Sample pic of ${title} website`} tabIndex={0} />
				}
			</div>
			<div className="workSample__description">
				<p tabIndex={0}>{description}</p>
			</div>
			<div className="workSample__links">

				{
					githubLink === "" ?
					<></>
					:
					// <div className="workSample__links-liveDemo">
						
						<a href={githubLink} className="workSample__links-github"><ImGithub  className="gitLogo"/> <p>GitHub repo</p> </a>
					// </div>
				}
				{
					liveDemoLink === "" ?
					<></>
					:
					// <div className="workSample__links-liveDemo">
						
						<a href={liveDemoLink} className="workSample__links-liveDemo"><GiEarthAmerica className="liveLogo"/>{liveDemoLink.includes("npmjs") ? "Npm repo" : "Live demo"}</a>
					// </div>
				}
			</div>
		</article>
	)
}

export default WorkSample;