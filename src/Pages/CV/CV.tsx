import React, { useEffect, useState } from "react";
import "./CV.scss";

import CheckBox from "../../Components/CheckBox/CheckBox";
import Skill from "../../Components/Skill/Skill";
import Experience from "../../Components/Experience/Experience";

import {ExperiencesDatas} from "../../Datas/CvExperiencesDatas"
import useRef from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const CV:React.FC = () => {


	// State for the download menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// State for the download menu
	const [isExperienceOpen, setIsExperienceOpen] = useState<boolean>(false);
	// State for the selected language
	const [inAlien, setInAlien] = useState<boolean>(false);
	// State for the text to show just below the skills samples
	const [index, setIndex] = useState<number>(0);

	console.log(index)
	
	useEffect(() => {
		const interval = setInterval(() => {
			index === 4 ? setIndex(0) : setIndex(index + 1);
		}, 1000)
		
		return () => {
			clearInterval(interval);
		}
	})
	
	

	// Change the state for the download menu, who show the two different languages to download the cv
	const showLanguages = () => {
		setIsOpen(!isOpen)
	}
	// Change the state for the download menu, who show the two different languages to download the cv
	const toggleShowExperiences = () => {
		setIsExperienceOpen(!isExperienceOpen)
	}
	// Change the state to show the content in earth or klingon language
	const changeTextLanguage = () => {
		setInAlien(!inAlien)
	}

	return (
		<section className={`cv ${inAlien && "alienFont"}`} >
			<div className="cv__description">
				<h2>On this page you can read or download my curriculum vitae.</h2>
				<br />
				<p>To facilitate the work of each person, whatever where you come from, the CV can be read in english language, the more popular on Earth, as well as in the language of my planet.</p>
				<br />
				<p>Click on the button below to change the language, and enjoy reading about my past experience.</p>
			</div>

			<div className="cv__content">
				<div className="cv__content__language">
					<p className="humanFont" >Earth language</p>
					<CheckBox inAlien={inAlien} 
								changeTextLanguage={changeTextLanguage} />
					<p className="humanFont">
						<span style={{fontSize: "1.1rem", marginRight: "5px"}} 
							  className="alienFont">ZXOOKG  
						</span>language
					</p>
				</div>

				<div className="cv__content__cv">

					<div className="cv__content__cv-header">
						<div className="cv__content__cv-profilePic">
							<img src={process.env.PUBLIC_URL + "assets/alien.jpg"} alt="Profile pic of Thomas" title="Profile pic of Thomas"  />
						</div>
						<div className="cv__content__cv-intro">
							<h2>Here's a sample of my tools and technologies i use to make beautiful websites and applications you need:</h2>
						</div>
					</div>

					<div className="cv__content__cv-skills">
						<Skill type="html" />
						<Skill type="css" />
						<Skill type="tailwind" />
						<Skill type="sass" />
						<Skill type="javascript" />
						<Skill type="typescript" />
						<Skill type="react" />
						<Skill type="redux" />
						<Skill type="mongo" />
						<Skill type="git" />
						<Skill type="github" />
						<Skill type="terminal" />
						<Skill type="responsive" />
						<Skill type="w3c" />

						<div className="cv__content__cv-skills-text">
							<p className={index === 0 ? "showText" : "hideText"} >I love bringing life to new ideas and projects, technically and visually.</p>
							<p className={index === 1 ? "showText" : "hideText"} >I think the users experience must be the priority, and be pleasant and enjoying. And it's important for all the users.</p>
							
							<p className={index === 2 ? "showText" : "hideText"} >I'm a fast learner and challenges lover, and i can adapt to new technologies and learn quickly.</p>
							<p className={index === 3 ? "showText" : "hideText"} >Also i know the respect of the mock-up is strongly important, with me you can be sure you'll can play at the seven differences game between your mock-up and the final project, and find none.</p>
							
							<p className={index === 4 ? "showText" : "hideText"} >Entrust me your project, some instructions and the mock-up, and 
							you have the insurance i will make this with serious, rigor, my best skills and my bigger smile 😃</p>

						</div>
					</div>
				</div>

				{/* <div className="cv__content__text">
					<p>I love bringing life to new projects and ideas, technically and visually.</p>
					<br />
					<p>I think the users experience must be the priority, and be pleasant and enjoying. And it's important for all the users.</p>
					<br />
					<p>Also i know the respect of the mock-up is strongly important, with me you can be sure you'll can play at the seven differences game between your mock-up and the final project, and find none.</p>
					<br />
					<p>Entrust me your project, some instructions and the mock-up, and 
						you have the insurance i will make this with serious, rigor and my bigger smile 😃</p>
				</div> */}

				<div className="cv__content__experiences">
					<h2>Experiences</h2>
					<p>You can download the CV by pressing the button located below this section to see the job descriptions and more details on it.</p>
					<br />
					<p>You also can see my human face on this.</p>
					<div className={`cv__content__experiences-articles ${isExperienceOpen ? "open" : "close"}`}>
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

					</div>
						<div className="cv__content__experiences-next" >
							<p>If you want you can see my olders experiences by clicking the below arrow, not from the dev world but it's experiences:</p>
							<IoIosArrowDown 
									onClick={toggleShowExperiences}
									className={`${isExperienceOpen ? "openExp" : "closeExp"}`} />
						</div>
				</div>


				<div className={`cv__content__download ${inAlien ? "alienFont" : "humanFont"}`}>
					<div className="cv__content__download-button" 
						 onClick={showLanguages} >Download CV
					</div>
					
					<div className={`cv__content__download-language ${isOpen ? "showLanguage" : "hideLanguage"}`}>
						<div onClick={showLanguages} >In english</div>
						<div onClick={showLanguages} >In french</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CV;