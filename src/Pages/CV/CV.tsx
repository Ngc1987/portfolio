import React, { useState } from "react";
import "./CV.scss";

import CheckBox from "../../Components/CheckBox/CheckBox";
import Skill from "../../Components/Skill/Skill";
import Experience from "../../Components/Experience/Experience";

import {ExperiencesDatas} from "../../Datas/CvExperiencesDatas"

const CV:React.FC = () => {

	// State for the download menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// State for the selected language
	const [inAlien, setInAlien] = useState<boolean>(false);

	// Change the state for the download menu, who show the two different languages to download the cv
	const showLanguages = () => {
		setIsOpen(!isOpen)
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
							<img src={process.env.PUBLIC_URL + "assets/alien.jpg"} alt="" />
						</div>
						<div className="cv__content__cv-intro">
							<h2>Here's a sample of my tools and technologies i use to make beautiful websites and applications you need:</h2>
						</div>
					</div>

					<div className="cv__content__cv-skills">
						<Skill type="html" />
						<Skill type="css" />
						<Skill type="sass" />
						<Skill type="javascript" />
						<Skill type="typescript" />
						<Skill type="react" />
						<Skill type="redux" />
						<Skill type="git" />
						<Skill type="github" />
						<Skill type="terminal" />
						<Skill type="responsive" />
						<Skill type="w3c" />
					</div>
				</div>

				<div className="cv__content__experiences">
					<h2>Experiences</h2>
					<p>You can download the CV by pressing the button located below this section to see the job descriptions and more details on it.</p>
					<br />
					<p>You also can see my human face on this.</p>
					<div className="cv__content__experiences-articles">
						{
							ExperiencesDatas.map((obj, index) => {
								return (
									<Experience employer={obj.employer}
												job={obj.job}
												dates={obj.dates}
												key={200 + index}
									 />
								)
							})
						}
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