import React, { useEffect, useRef } from 'react';
import "./DesktopNav.scss";
import {Link, useParams} from "react-router-dom";
import usePathname from '../../Hooks/usePathname';


const DesktopNav:React.FC = () => {
	

	// Select the lightning element
	const marker = useRef() as React.MutableRefObject<HTMLDivElement>;
	const ball = useRef() as React.MutableRefObject<HTMLDivElement>;
	// Taking the path name of the current page
	const pathName = usePathname();

	
	function customizeMarker(e: any) {
		marker.current.style.left = e.target.offsetLeft + "px";
		marker.current.style.width = e.target.clientWidth + "px";

	}

	function keepMarkerColor(elem: any) {
		switch(pathName) {
			case "/" :
				elem.style.background = "#5da6ff";
				elem.style.boxShadow = "0 0 15px #5da6ff, 0 0 30px #5da6ff, 0 0 45px #5da6ff, 0 0 60px #5da6ff";
				break;
			case "/mywork" :
				elem.style.background = "#b65dff";
				elem.style.boxShadow = "0 0 15px #b65dff, 0 0 30px #b65dff, 0 0 45px #b65dff, 0 0 60px #b65dff";
				break;
			case "/cv" :
				elem.style.background = "#ff5d6d";
				elem.style.boxShadow = "0 0 15px #ff5d6d, 0 0 30px #ff5d6d, 0 0 45px #ff5d6d, 0 0 60px #ff5d6d";
				break;
			case "/about" :
				elem.style.background = "#ffa35d";
				elem.style.boxShadow = "0 0 15px #ffa35d, 0 0 30px #ffa35d, 0 0 45px #ffa35d, 0 0 60px #ffa35d";
				break;
			case "/contact" :
				elem.style.background = "#6ec444";
				elem.style.boxShadow = "0 0 15px #6ec444, 0 0 30px #6ec444, 0 0 45px #6ec444, 0 0 60px #6ec444";
				break;
		}
	}

	useEffect(() => {
		keepMarkerColor(ball.current)
	})

	
	return (
		<nav className="desktopNav" >
			
			<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/" >Home</Link> 
			<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/mywork" >My work</Link>
			<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/cv" >CV</Link>
			<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/about" >About me</Link>
			<Link onMouseMove={(e) => customizeMarker(e)} className="desktopNav__link" to="/contact" >Contact</Link>
		
			<div id="marker" ref={marker}>
				<div className="ball" ref={ball}></div>
			</div>
			
		</nav>
	)
}

export default DesktopNav;