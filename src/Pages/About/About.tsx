import React, { useRef } from "react";
import "./About.scss";
import usePathname from '../../Hooks/usePathname';

interface Props {
	location?: string;
}

const About:React.FC = (props) => {

	return (

		<section className="about">
			<div className="about__description">
				<h2></h2>
			</div>
		</section>
	)
}

export default About;