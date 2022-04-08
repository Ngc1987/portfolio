import React, {useCallback, useState, useEffect, useRef, useContext, ReactElement} from "react";
import "./ChangeLanguage.scss"

import { LangContext } from "../../Context/lang";

interface ChangeLanguageProps {
	screen?: string;
}

function ChangeLanguage({screen}: ChangeLanguageProps):ReactElement {

	const {state: {language}, dispatch: {setLanguage, translate}} = useContext(LangContext);
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownE1 = useRef<HTMLUListElement>(null);

	const handleClickOutside = useCallback((e) => {
		if(showDropdown && e.target.closest(".dropdown") !== dropdownE1.current) {
			setShowDropdown(false);
		}
	}, [showDropdown, setShowDropdown, dropdownE1]);


	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		}
	}, [handleClickOutside])


	const chooseLanguageHandler = (value: string) => {
		// setShowDropdown(false);
		setLanguage(value);
	}

	console.log(language, showDropdown)

	return(
		<div className={`changeLanguage ${screen === "large" ? "large" : "small"} ${showDropdown ? "openLanguage" : "closeLanguage"}`}>

			<p onClick={() => setShowDropdown(!showDropdown)}>{language === "fr" ? "🇫🇷" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}</p>
				
			<p className={`selected ${showDropdown ? "showFlag" : "hideFlag"}`} 
				onClick={() => {setShowDropdown(!showDropdown); chooseLanguageHandler(language === "fr" ? "en" : "fr")}}>{language === "en" ? "🇫🇷" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}</p>

			{/* <p className={`selected ${showDropdown ? "showFlag" : "hideFlag"}`} 
				onClick={() => {setShowDropdown(!showDropdown); chooseLanguageHandler("en")}}
					>🏴󠁧󠁢󠁥󠁮󠁧󠁿</p> */}

		</div>
	)
}

export default ChangeLanguage;