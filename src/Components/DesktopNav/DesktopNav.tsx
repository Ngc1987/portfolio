import React, { useEffect, useRef } from 'react';
import "./DesktopNav.scss";
import usePathname from '../../Hooks/usePathname';
import {Link} from "react-router-dom";

/**
 * Component DesktopNav
 * @category Components
 * @remarks
 *  Example of usage
 * ```ts
 *  <Icon name="about" size="2vw" color="about" hover="active"/>
 * ```
 * 
 * @example <DesktopNav/>
 * @return  React.ReactNode
 */
const DesktopNav:React.FC = () => {
	

	// Select the ball div element
	const marker = useRef() as React.MutableRefObject<HTMLDivElement>;
	
	// Select the ball element
	const ball = useRef() as React.MutableRefObject<HTMLDivElement>;
	// Taking the path name of the current page
	const pathName = usePathname();

	// Making the marker move when the menu is on hover	
	function customizeMarker(e: any) {
		marker.current.style.left = e.target.offsetLeft + "px";
		marker.current.style.width = e.target.clientWidth + "px";
	}

	// Setting the color of the ball according to the url path
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

		<nav className="desktopNav" data-testid="desktopNav" >
			<Link onMouseMove={(e) => customizeMarker(e)} 
					className="desktopNav__link" 
					to="/"
					data-testid="desktopNavLink" >
					Home
			</Link> 
			<Link onMouseMove={(e) => customizeMarker(e)} 
					className="desktopNav__link" 
					to="/mywork"
					data-testid="desktopNavLink" >
					My work
			</Link>
			<Link onMouseMove={(e) => customizeMarker(e)} 
					className="desktopNav__link" 
					to="/cv"
					data-testid="desktopNavLink" >
					CV
			</Link>
			<Link onMouseMove={(e) => customizeMarker(e)} 
					className="desktopNav__link" 
					to="/about"
					data-testid="desktopNavLink" >
					About me
			</Link>
			<Link onMouseMove={(e) => customizeMarker(e)} 
					className="desktopNav__link" 
					to="/contact"
					data-testid="desktopNavLink" >
					Contact
			</Link>
		
			<div id="marker" ref={marker}>
				<div className="ball" ref={ball}></div>
			</div>
		</nav>
	)
}

export default DesktopNav;