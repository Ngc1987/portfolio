import React from 'react';
import "./Experience.scss";
import { FaCar } from 'react-icons/fa';
import { SiMcdonalds } from 'react-icons/si';
import { GiChimney } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';

interface Props {
	employer: string
	job: string;
	dates: string;
}

const Experience:React.FC<Props> = ({employer, job, dates}) => {

	return (
		<article className="experience" >
			<div className="experience__header">
				<div className="experience__header-logo">
					{
						employer === "Feu Vert" ? <FaCar/> :
						employer === "Myself" ? <FaLaptopCode/> :
						employer === "Open Class Rooms" ? <FaLaptopCode/> :
						employer === "McDonald's" ? <SiMcdonalds/> :
													<GiChimney/>
					}
				</div>
				<div className="experience__header-employer">{employer}</div>
			</div>
			<div className="experience__content">
				<div className="experience__content-job">{job}</div>
				<div className="experience__content-date">{dates}</div>
			</div>
		</article>
	)
}

export default Experience;