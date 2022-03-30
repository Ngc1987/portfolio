import React, { useRef } from "react";
import "./About.scss";
import usePathname from '../../Hooks/usePathname';
import HiAlien from '../../Components/HiAlien/HiAlien';
import StyledDiv from '../../Components/StyledDiv/StyledDiv';

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
interface Props {
	location?: string;
}

const About:React.FC = (props) => {

	return (

		<MouseParallaxContainer className="about">
			<MouseParallaxChild
					 factorX={0.01}
					 factorY={0.01} 
					 className="about__description"
			>
				<h2>Here i'll go to talk a little of me.</h2>
				<br />
				<p>I'm born in 1st november, on 1987 Earth year.</p>
			</MouseParallaxChild>
			<MouseParallaxChild
					 factorX={0.03}
					 factorY={0.03} 
					 className="about__description">
				<p>I want to work in Earth because on my planet, the artificial intelligence make the big part of the works for us. It's pretty nice, we have all the life time to do what we want, but i really love building websites and applications.</p>
				<br />
			</MouseParallaxChild>
			<MouseParallaxChild
							factorX={0.06}
							factorY={0.06} className="about__articles">

				<MouseParallaxChild
							factorX={0.06}
							factorY={0.06}>
					<article className="about__articles__article article1"  >
						<p>Also, i really love pizzas, and the best are in Earth.</p>
						<img src={process.env.PUBLIC_URL + "/assets/pizza.png"} alt="" />
					</article>
				</MouseParallaxChild>
				<MouseParallaxChild
							factorX={0.10}
							factorY={0.10}>
					<article className="about__articles__article article2" >
						<p>Also, i really love pizzas, and the best are in Earth.</p>
						<img src={process.env.PUBLIC_URL + "/assets/pizza.png"} alt="" />
					</article>
				</MouseParallaxChild>

			

			</MouseParallaxChild>
				<MouseParallaxChild
						factorX={0.03}
						factorY={0.03} 
						className="about__description">
					<p>In my daily life, i also love the travels time, looking some big stars explodes, doing some sports and learning some stuffs about sciences and technologies.</p>
							
				</MouseParallaxChild>

			{/* <MouseParallaxChild
					 factorX={0.15}
					 factorY={0.15} className="about__alien">
				<HiAlien/>
			</MouseParallaxChild> */}
		</MouseParallaxContainer>
	)
}

export default About;