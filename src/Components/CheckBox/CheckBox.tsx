import React from 'react';
import "./CheckBox.scss";

const CheckBox = () => {
	return (
		<label className="checkbox" htmlFor="checkbox">
			<input id="checkbox" type="checkbox" className="checkbox__input"  />
			<span></span>
			<i className="checkbox__indicator" ></i>
		</label>
	)
}

export default CheckBox;