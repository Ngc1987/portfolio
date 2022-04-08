import React, { MouseEventHandler } from 'react';
import "./WorkSample.scss";
import { ImGithub } from 'react-icons/im';
import { GiEarthAmerica } from 'react-icons/gi';
import { WorkSamplesProps } from '../../Datas/WorkSampleDatas';


interface WorkSampleProps extends WorkSamplesProps {
	translate: (key: string) => void;
	index: number;
}

const WorkSample:React.FC<WorkSampleProps> = ({title, image, description, githubLink, liveDemoLink, inProgress, index, translate}) => {
	

	// const handleClick = (url: string):MouseEventHandler<HTMLAnchorElement> => {
	// 	window.open(url);
	// };
		
	return (
		<article className="workSample" data-testid="workSample">
			<div className="workSample__title">
				<h2 tabIndex={0}>{translate(`myWorkTitle${index}`)} </h2>
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
				<p tabIndex={0}>{translate(`myWorkDescription${index}`)} </p>
			</div>
			<div className="workSample__links">

				{
					githubLink === "" ?
					<></>
					:
						<a href={githubLink} 
							className="workSample__links-github"
							target="_blank" 
							rel="noreferrer noopener">
								<ImGithub  className="gitLogo"/> 
								<p>GitHub repo</p> 
							</a>
				}
				{
					liveDemoLink === "" ?
					<></>
					:
						<a href={liveDemoLink} 
							target="_blank" 
							rel="noreferrer noopener"
							className="workSample__links-liveDemo">
								<GiEarthAmerica className="liveLogo"/>{liveDemoLink.includes("npmjs") ? "Npm repo" : "Live demo"}
						</a>
				}
			</div>
		</article>
	)
}

export default WorkSample;