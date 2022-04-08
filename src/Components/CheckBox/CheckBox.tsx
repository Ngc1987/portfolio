import React, { ReactElement } from 'react';
import "./CheckBox.scss";

export type CheckBoxProps = {
	/** Boolean state to know if the language is in alien language */
	inAlien: boolean;
	/** Set state function to change the language between alien or earth language */
	changeTextLanguage: () => void;
};


/**
 * Renders a custom checkbox to change the language
 * 
 * @template CheckBoxProps 
 * @category Component
 * @default CheckBox
 */
export function CheckBox({inAlien, changeTextLanguage}:CheckBoxProps):ReactElement {

	const ariaChangeLanguage = (e:any) => {
		// console.log(e.charCode)
		if(e.charCode === 13) {
			changeTextLanguage();
		}
	}

	return (
		
		<label onKeyPress={ariaChangeLanguage} tabIndex={0} className={`checkbox ${inAlien ? "yellowLabel" : "blueLabel"}`} htmlFor="checkbox" data-testid="checkbox">
			<input id="checkbox" 
					type="checkbox" 
					className="checkbox__input" 
					checked={inAlien}
					onChange={changeTextLanguage} 
			/>
			<span></span>
			<i className="checkbox__indicator" ></i>
		</label>
	)
};
