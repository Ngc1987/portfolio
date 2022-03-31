import React from "react";
import "./About.scss";

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const About:React.FC = () => {

	return (

		<MouseParallaxContainer className="about">
			<MouseParallaxChild
					 factorX={0.02}
					 factorY={0.02} 
					 className="about__description child1"
			>
				<h2>Here i'll go to talk a little of me.</h2>
				<br />
				</MouseParallaxChild>
				<MouseParallaxChild
					 factorX={0.04}
					 factorY={0.04}
					 className="about__description child2" >

				<p className="about__description-text" >I'm born in 1st november, on 1987 Earth year.</p>
			</MouseParallaxChild>
			<MouseParallaxChild
					 factorX={0.06}
					 factorY={0.06} 
					 className="about__description child3">
				<p className="about__description-text2" >I want to work in Earth because on my planet, the artificial intelligence make the big part of the works for us. 
				</p>
				</MouseParallaxChild>
				<MouseParallaxChild
					 factorX={0.08}
					 factorY={0.08} 
					 className="about__description child3">

				<p className="about__description-text3">
					It's pretty nice, we have all the life time to do what we want, but i really love building websites and applications.
				</p>
			</MouseParallaxChild>
			<MouseParallaxChild
							factorX={0.12}
							factorY={0.12} className="about__articles">

				
					<article className="about__articles__article article1"  >
						<p>Also, i really love pizzas, and the best are in Earth.</p>
						<img src={process.env.PUBLIC_URL + "/assets/pizza.png"} alt="" />
					</article>

			

			</MouseParallaxChild>
				<MouseParallaxChild
						factorX={0.08}
						factorY={0.08} 
						className="about__description">
					<p className="about__description-text3" >In my daily life, i like doing some sports and learning some stuffs about sciences and technologies,
						<br /> 
						travels on space and time, and looking some big stars explodes.</p>
							
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