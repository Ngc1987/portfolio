import React, { useState } from "react";
import "./CV.scss";
import CheckBox from "../../Components/CheckBox/CheckBox";

const CV = () => {

	const [isOpen, setIsOpen] = useState<boolean>(false);
	// const [isOpen, setIsOpen] = useState<boolean>(false);

	const showLanguages = () => {
		setIsOpen(!isOpen)
	}

	return (
		<section className="cv" >
			<div className="cv__description">
				<p>On this page you can read or download my curriculum vitae.</p>
				<br />
				<p>To facilitate the work of each person, whatever where you come from, the CV can be read in english language, the more popular on Earth, as well as in the language of my planet.</p>
				<br />
				<p>Click on the button below to change the language, and enjoy reading about my past experience.</p>
			</div>

			<div className="cv__content">
				<div className="cv__content__language">
					<p>Earth language</p>
					<CheckBox/>
					<p><em>ZXOOKG</em> language</p>
				</div>
				<div className="cv__content__download">
					<button onClick={showLanguages} >Download CV</button>
					
					<div className={`cv__content__download-language ${isOpen ? "hideLanguage" : "showLanguage"}`}>
						<div onClick={showLanguages} >In english</div>
						<div onClick={showLanguages} >In french</div>
					</div>
					
				</div>
			</div>
		</section>
	)
}

export default CV;