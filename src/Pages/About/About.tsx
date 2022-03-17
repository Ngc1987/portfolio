import React, { useRef } from "react";
import "./About.scss";
import usePathname from '../../Hooks/usePathname';

interface Props {
	location?: string;
}

const About:React.FC = (props) => {

	// Select the lightning element
	// const marker = useRef() as React.MutableRefObject<HTMLDivElement>;
	// // Taking the path name of the current page
	// const pathName = usePathname();

	// function markerColor() {

	// }
	// console.log(pathName)

	return (
		<div>About</div>
	)
}

export default About;