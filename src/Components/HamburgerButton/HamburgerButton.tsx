import React from "react";
import { Sling as Hamburger }  from "hamburger-react";

type Props = {
	toggled: boolean;
	toggle: () => void;
	onToggle: (toggled: boolean) => void;
}

const HamburgerButton:React.FC<Props> = ({toggled, toggle, onToggle}) => {

	// Checking the browser to set different color in mozilla
	const navigateur = navigator.userAgent;
	// console.log(navigateur)

	return (

		<Hamburger rounded 
				toggled={toggled} 
				toggle={toggle} 
				onToggle={onToggle}
				size={36} 
				duration={1} 
				color={!navigateur.includes("Chrome") ?  "#5da6ff" :  "white"}
				label="Show menu"
				/>
	)
}

export default HamburgerButton;