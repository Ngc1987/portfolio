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
	translate: (key: string) => void;
}

const Experience:React.FC<Props> = ({employer, job, dates, index, showExp, translate}) => {

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
				<div className="experience__header-employer" tabIndex={0}>{translate(`cvExperienceEmployer${index}`)} </div>
			</div>
			<div className="experience__content">
				<div className="experience__content-job" tabIndex={0}>{translate(`cvExperienceJob${index}`)} </div>
				<div className="experience__content-date" tabIndex={0}>{translate(`cvExperienceDates${index}`)} </div>
			</div>
		</article>
	)
}

export default Experience;