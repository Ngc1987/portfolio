import React, { useEffect, useState } from "react";
import "./CV.scss";

import CheckBox from "../../Components/CheckBox/CheckBox";
import Skill from "../../Components/Skill/Skill";
import Experience from "../../Components/Experience/Experience";

import {ExperiencesDatas} from "../../Datas/CvExperiencesDatas";
import { IoIosArrowDown } from 'react-icons/io';

const CV:React.FC = () => {


	// State for the download menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// State for the experience menu
	const [isExperienceOpen, setIsExperienceOpen] = useState<boolean>(false);
	// State for the selected language
	const [inAlien, setInAlien] = useState<boolean>(false);
	// State for the text to show just below the skills samples
	const [index, setIndex] = useState<number>(0);

	console.log(index)
	
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
				<h1 tabIndex={0}>On this page you can read or download my curriculum vitae.</h1>
				<br />
				<p tabIndex={0}>To facilitate the work of each person, whatever where you come from, the CV can be read in english language, the more popular on Earth, as well as in the language of my planet.</p>
				<br />
				<p tabIndex={0}>Click on the button below to change the language, and enjoy reading about my past experience.</p>
			</section>

			<section className="cv__content">
				<div className="cv__content__language">
					<p className="humanFont" tabIndex={0} >Earth language</p>
					<CheckBox inAlien={inAlien} 
								changeTextLanguage={changeTextLanguage} />
					<p className="humanFont" tabIndex={0}>
						<span style={{fontSize: "1.1rem", marginRight: "5px"}} 
							  className="alienFont">ZXOOKG  
						</span>language
					</p>
				</div>

				<section className="cv__content__cv">

					<div className="cv__content__cv-header">
						<div className="cv__content__cv-profilePic">
							<img src={process.env.PUBLIC_URL + "assets/alien.webp"} alt="Profile pic of Thomas" title="Profile pic of alien version of Thomas" tabIndex={0}/>
						</div>
						<div className="cv__content__cv-intro">
							<h2 tabIndex={0}>Here's a sample of my tools and technologies i use to make beautiful websites and applications you need:</h2>
						</div>
					</div>

					<div className="cv__content__cv-skills">
						<Skill name="html" />
						<Skill name="css" />
						<Skill name="tailwind" />
						<Skill name="sass" />
						<Skill name="javascript" />
						<Skill name="typescript" />
						<Skill name="react" />
						<Skill name="redux" />
						<Skill name="jest" />
						<Skill name="mongo" />
						<Skill name="git" />
						<Skill name="github" />
						<Skill name="terminal" />
						<Skill name="responsive" />
						<Skill name="w3c" />

						<div className="cv__content__cv-skills-text" data-testid="skillsText" >
							<p className={index === 0 ? "showText" : "hideText"} tabIndex={0} >I love bringing life to new ideas and projects, technically and visually.</p>
							<p className={index === 1 ? "showText" : "hideText"} tabIndex={0} >I think the users experience must be the priority, and be pleasant and enjoying. And it's important for all the users.</p>
							
							<p className={index === 2 ? "showText" : "hideText"} tabIndex={0} >I'm a fast learner and challenges lover, and i can adapt to new technologies and learn quickly.</p>
							<p className={index === 3 ? "showText" : "hideText"} tabIndex={0} >Also i know the respect of the mock-up is strongly important, with me you can be sure you'll can play at the seven differences game between your mock-up and the final project, and find none.</p>
							
							<p className={index === 4 ? "showText" : "hideText"} tabIndex={0} >Entrust me your project, some instructions and the mock-up, and 
							you have the insurance i will make this with serious, rigor, my best skills and my bigger smile 😃</p>

						</div>
					</div>
				</section>

				<section className="cv__content__experiences">
					<h2 tabIndex={0}>Experiences</h2>
					<p tabIndex={0}>You can download the CV by pressing the button located below this section to see the job descriptions and more details on it.</p>
					<br />
					<p tabIndex={0}>You also can see my human face on this.</p>
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
									 />
								)
							})
						}

					</section>
						<div className="cv__content__experiences-next" >
							<p>If you want you can see my olders experiences by clicking the below arrow, not from the dev world but it's experiences:</p>
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
						  tabIndex={0} >Download CV
					</div>
					
					<div className={`cv__content__download-language ${isOpen ? "showLanguage" : "hideLanguage"}`}>
						<a href={process.env.PUBLIC_URL + "assets/Cv/CvThomasFR.pdf"} download onClick={showLanguages} tabIndex={0} onKeyPress={showLanguages} >In french</a>
						<a href={process.env.PUBLIC_URL + "assets/Cv/CvThomasEN.pdf"} download onClick={showLanguages} tabIndex={0} onKeyPress={showLanguages} >In english</a>
					</div>
				</div>
			</section>
		</main>
	)
}

export default CV;