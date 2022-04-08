import {useCallback, useState, useEffect, useRef, useContext, ReactElement} from "react";
import "./ChangeLanguage.scss"

import { LangContext } from "../../Context/lang";

export interface ChangeLanguageProps {
	screen: string;
}

/**
 * Component who show the language flag. Click on it to change the language between the availables
 * 
 * @template ChangeLanguageProps 
 * @category Component
 * @default ChangeLanguage
 */
export function ChangeLanguage({screen}: ChangeLanguageProps):ReactElement {

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


	return(
		<div className={`changeLanguage ${screen === "large" ? "large" : "small"} ${showDropdown ? "openLanguage" : "closeLanguage"}`}>

			<p onClick={() => setShowDropdown(!showDropdown)}>{language === "fr" ? "🇫🇷" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}</p>
				
			<p className={`selected ${showDropdown ? "showFlag" : "hideFlag"}`} 
				onClick={() => {setShowDropdown(!showDropdown); chooseLanguageHandler(language === "fr" ? "en" : "fr")}}>{language === "en" ? "🇫🇷" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿"}</p>

		</div>
	)
}

export default ChangeLanguage;