import React from 'react';
import "./Earth.scss"

const Earth:React.FC = () => {
	return (
		<img id="earth" src={process.env.PUBLIC_URL + "assets/earth.webp"} alt="Earth draw"/>
	)
}

export default Earth;