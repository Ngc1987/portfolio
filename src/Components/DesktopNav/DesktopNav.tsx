import React from 'react';
import "./DesktopNav.scss";
import {Link} from "react-router-dom";

const DesktopNav:React.FC = () => {
	return (
		<nav className="desktopNav" >
			<ul>
				<li> <Link to="/" >Home</Link> </li>
				<li> <Link to="/realisations" >Realisations</Link></li>
				<li> <Link to="/cv" >CV</Link></li>
				<li> <Link to="/about" >About</Link></li>
				<li> <Link to="/contact" >Contact</Link></li>
			</ul>
		</nav>
	)
}

export default DesktopNav;