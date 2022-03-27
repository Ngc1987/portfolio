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
				<h2>Here i'll go to talk a little of me.</h2>
				<br />
				<p>I'm born in 1st november, on 1987 Earth year.</p>
				<br />
				<p>I want to work in Earth because on my planet, </p>
			</div>
		</section>
	)
}

export default About;