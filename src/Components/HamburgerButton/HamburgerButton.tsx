import { Sling as Hamburger }  from "hamburger-react";
import React from "react";

interface Props  {
	toggled: boolean;
	toggle: () => void;
	onToggle: (toggled: boolean) => void;
}

const HamburgerButton:React.FC<Props> = ({toggled, toggle, onToggle}) => {

	const navigateur = navigator.userAgent;

	console.log(navigateur)

	return (

		<Hamburger rounded 
				toggled={toggled} 
				toggle={toggle} 
				onToggle={onToggle}
				size={36} 
				duration={1} 
				color={!navigateur.includes("Chrome") ?  "#5da6ff" :  "white"}
				label="Show menu"/>

	)
}

export default HamburgerButton;