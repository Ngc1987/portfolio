import React from 'react';
import "./CheckBox.scss";

type Props = {
	inAlien: boolean;
	changeTextLanguage: () => void;
};

const CheckBox:React.FC<Props> = ({inAlien, changeTextLanguage}) => {

	return (
		
		<label className="checkbox" htmlFor="checkbox" data-testid="checkbox">
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

export default CheckBox;