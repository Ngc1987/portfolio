import React, { ReactElement, useEffect, useState } from "react";
import "./Skills.scss";

import {CheckBox} from "../../Components/CheckBox/CheckBox";
import Skill from "../../Components/Skill/Skill";
import Experience from "../../Components/Experience/Experience";

import {ExperiencesDatas} from "../../Datas/CvExperiencesDatas";
import {SkillsDatas} from "../../Datas/SkillsDatas";

import { IoIosArrowDown } from 'react-icons/io';


export type SkillsProps = {
	translate: (key: string) => void;
}
/**
 * Renders the Cv page
 * 
 * @component
 * 
 * ```tsx
 * <Route path="/about" element={
 *		<React.Suspense fallback={<Loader className="page__loader" />}>
 *				<CV/>
 *		</React.Suspense>
 *	}/>
 * ```
 * 
 * @category Pages
 */
export function CV({translate}:SkillsProps):ReactElement {

	console.log(translate)

	// State for the download menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// State for the experience menu
	const [isExperienceOpen, setIsExperienceOpen] = useState<boolean>(false);
	// State for the selected language
	const [inAlien, setInAlien] = useState<boolean>(false);
	// State for the text to show just below the skills samples
	const [index, setIndex] = useState<number>(0);

	// console.log(index)
	
	useEffect(() => {
		const interval: NodeJS.Timer = setInterval(() => {
			index === 4 ? setIndex(0) : setIndex(index + 1);
		}, 8000)
		
		return () => {
			clearInterval(interval);
		}
	})
	
	

	// Change the state for the download menu, who show the two different languages to download the cv
	const showLanguages = (e:any) => {
		setIsOpen(!isOpen);
		if(e.charCode === 13) {
			setIsOpen(!isOpen);
		}
	}
	// Change the state for the download menu, who show the two different languages to download the cv
	const toggleShowExperiences = (e:any) => {
		setIsExperienceOpen(!isExperienceOpen)
		if(e.charCode === 13) {
			setIsExperienceOpen(!isExperienceOpen)
		}
	}
	// Change the state to show the content in earth or klingon language
	const changeTextLanguage = () => {
		setInAlien(!inAlien)
	}

	return (
		<main className={`cv ${inAlien && "alienFont"}`} >
			<section className="cv__description">
				<h1 tabIndex={0}>{translate("cvDescriptionH1")} </h1>
				<br />
				<p tabIndex={0}>{translate("cvDescriptionText1")} <em className="alienFont" >sfdhbjbty</em></p>
				<br />
				<p tabIndex={0}>{translate("cvDescriptionText2")} </p>
			</section>

			<section className="cv__content">
				<div className="cv__content__language">
					<p className="humanFont" tabIndex={0} >{translate("cvContentText1")} </p>
					<CheckBox inAlien={inAlien} 
								changeTextLanguage={changeTextLanguage} />
					<p className="humanFont" tabIndex={0}>
						<em style={{fontSize: "1.5rem", marginRight: "5px"}} 
							  className="alienFont">sfdhbjbty  
						</em>{translate("cvContentText2")} 
					</p>
				</div>

				<section className="cv__content__cv">

					<div className="cv__content__cv-header">
						<div className="cv__content__cv-profilePic">
							<img src={process.env.PUBLIC_URL + "assets/alien.webp"} alt="Profile pic of Thomas" title="Profile pic of alien version of Thomas" tabIndex={0}/>
						</div>
						<div className="cv__content__cv-intro">
							<h2 tabIndex={0}>{translate("cvContentH2")} </h2>
						</div>
					</div>

					<div className="cv__content__cv-skills">

						{SkillsDatas.map((skill, index) => {
							return <Skill key={index} index={index} name ={skill.name} translate={translate}/>
						})}

						<div className="cv__content__cv-skills-text" data-testid="skillsText" >
							<p className={index === 0 ? "showText" : "hideText"} tabIndex={0} >{translate("cvSkillsText1")} </p>
							<p className={index === 1 ? "showText" : "hideText"} tabIndex={0} >{translate("cvSkillsText2")} </p>
							
							<p className={index === 2 ? "showText" : "hideText"} tabIndex={0} >{translate("cvSkillsText3")} </p>
							<p className={index === 3 ? "showText" : "hideText"} tabIndex={0} >{translate("cvSkillsText4")} </p>
							
							<p className={index === 4 ? "showText" : "hideText"} tabIndex={0} >{translate("cvSkillsText5")} </p>

						</div>
					</div>
				</section>

				<section className="cv__content__experiences">
					<h2 tabIndex={0}>{translate("cvExperiencesH2")} </h2>
					<p tabIndex={0}>{translate("cvExperiencesText1")} </p>
					<br />
					<p tabIndex={0}>{translate("cvExperiencesText2")} </p>
					<section className={`cv__content__experiences-articles ${isExperienceOpen ? "open" : "close"}`}>
						{
							ExperiencesDatas.map((obj, index) => {
								return (
									<Experience employer={obj.employer}
												job={obj.job}
												dates={obj.dates}
												key={200 + index}
												index={index}
												showExp={isExperienceOpen}
												translate={translate}
									 />
								)
							})
						}

					</section>
						<div className="cv__content__experiences-next" >
							<p>{translate("cvExperiencesText3")} </p>
							<IoIosArrowDown 
									onClick={toggleShowExperiences}
									onKeyPress={toggleShowExperiences}
									tabIndex={0}
									className={`${isExperienceOpen ? "openExp" : "closeExp"}`} />
						</div>
				</section>


				<div className={`cv__content__download ${inAlien ? "alienFont" : "humanFont"}`} data-testid="downloadButton" >
					<div className="cv__content__download-button" 
						 onClick={showLanguages}
						 onKeyPress={showLanguages}
						  tabIndex={0} >{translate("cvDownloadButton")} </div>
					
					<div className={`cv__content__download-language ${isOpen ? "showLanguage" : "hideLanguage"}`}>
						<a href={process.env.PUBLIC_URL + "assets/Cv/CvThomasFR.pdf"} download onClick={showLanguages} tabIndex={0} onKeyPress={showLanguages} >{translate("cvDownloadText1")} </a>
						<a href={process.env.PUBLIC_URL + "assets/Cv/CvThomasEN.pdf"} download onClick={showLanguages} tabIndex={0} onKeyPress={showLanguages} >{translate("cvDownloadText2")} </a>
					</div>
				</div>
			</section>
		</main>
	)
}

export default CV;