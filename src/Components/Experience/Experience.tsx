import React from 'react';
import "./Experience.scss";
import { FaCar } from 'react-icons/fa';
import { SiMcdonalds } from 'react-icons/si';
import { GiChimney } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';

type Props = {
	employer: string
	job: string;
	dates: string;
	index: number;
	showExp: boolean;
}

const Experience:React.FC<Props> = ({employer, job, dates, index, showExp}) => {

	return (
		<article className=
				{`${index < 3 ? "experience showExp" : 
					index > 2 && showExp ? "experience showExp" :
					"experience hideExp"}`}
					data-testid="experience" 
		>
			<div className="experience__header">
				<div className="experience__header-logo">
					{
						employer === "Feu Vert" ? <FaCar/> :
						employer === "Myself" ? <FaLaptopCode data-testid="myselfJob" /> :
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