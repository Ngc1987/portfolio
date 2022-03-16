import React, { useEffect, useRef } from 'react';
import "./DesktopNav.scss";
import {Link, useParams} from "react-router-dom";

// type urlParam = {
//   currentUrl: string;
// };

const DesktopNav:React.FC = () => {
	

	// Select the lightning element
	const marker = useRef() as React.MutableRefObject<HTMLDivElement>;
	
	function customizeMarker(e: any) {
		marker.current.style.left = e.target.offsetLeft + "px";
		marker.current.style.width = e.target.clientWidth + "px";
	}
	
	return (
		<nav className="desktopNav" >
			
				<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/" >Home</Link> 
				<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/realisations" >Realisations</Link>
				<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/cv" >CV</Link>
				<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/about" >About</Link>
				<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/contact" >Contact</Link>
			
			<div id="marker" ref={marker}></div>
		</nav>
	)
}

export default DesktopNav;