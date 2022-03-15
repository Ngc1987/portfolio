import React from 'react';
import "./Earth.scss"

const Earth = () => {
	return (
		<img id="earth" src={process.env.PUBLIC_URL + "assets/earth2.png"} alt="" />
	)
}

export default Earth;