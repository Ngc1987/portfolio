import React, { ReactElement, useEffect, useRef } from "react";
import "./About.scss";
import useWindowSize from "../../Hooks/useWindowSize";


import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";


export type AboutProps = {
	translate: (key: string) => void;
}


/**
 * Renders the About page
 * 
 * @component
 * 
 * ```tsx
 * <Route path="/about" element={
 *		<React.Suspense fallback={<Loader className="page__loader" />}>
 *				<About/>
 *		</React.Suspense>
 *	}/>
 * ```
 * 
 * @category Pages
 */

export function About({translate}:AboutProps):ReactElement {

	const dimension = useWindowSize();

	return (

		dimension.width > 767 ?

		<MouseParallaxContainer className="about">

			<MouseParallaxChild
				factorX={0.02}
				factorY={0.02}
			//  ref={firstChild}
				className="about__description child1"
			>
				<h1 tabIndex={0}>{translate("aboutH1")} </h1>
				<br />

			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.04}
				factorY={0.04}
				className="about__description child2" >

				<p className="about__description-text" tabIndex={0} >{translate("aboutText1")} </p>

			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.06}
				factorY={0.06} 
				className="about__description child3">

				<p className="about__description-text2" tabIndex={0} >{translate("aboutText2")} </p>

			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.08}
				factorY={0.08} 
				className="about__description child3">

				<p className="about__description-text3" tabIndex={0}>
					{translate("aboutText3")} </p>
			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.12}
				factorY={0.12} className="about__articles">

				<article className="about__articles__article article1"  >
					<p tabIndex={0}>{translate("aboutText4")} </p>
					<img src={process.env.PUBLIC_URL + "/assets/pizza.webp"} alt="" />
				</article>

			</MouseParallaxChild>

			<MouseParallaxChild
					factorX={0.08}
					factorY={0.08} 
					className="about__description">

				<p className="about__description-text3" tabIndex={0} >{translate("aboutText5")} 
				<br /> 
				{translate("aboutText6")} </p>
						
			</MouseParallaxChild>

				<MouseParallaxChild
					 factorX={0.06}
					 factorY={0.06} 
					 className="about__description child3">

				<p className="about__description-text2" tabIndex={0}>
					{translate("aboutText7")} </p>
			</MouseParallaxChild>
			<MouseParallaxChild
				factorX={0.04}
				factorY={0.04} 
				className="about__description child3">

				<p className="about__description-text" tabIndex={0}>
					{translate("aboutText8")} 
					<br /> {translate("aboutText9")} 
				</p>

			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.10}
				factorY={0.10}
				className="planet1" >

				<img src={process.env.PUBLIC_URL + "/assets/planet4.webp"} 
				alt="Beautiful exo Saturne" />
			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.25}
				factorY={0.20}
				className="planet2" >

				<img src={process.env.PUBLIC_URL + "/assets/redPlanet.webp"} 
					alt="Full water planet"/>
			</MouseParallaxChild>

			<MouseParallaxChild
				factorX={0.35}
				factorY={0.25}
				className="planet3" >
					
				<img src={process.env.PUBLIC_URL + "/assets/planet2.webp"} 
					alt="Full water planet"/>
			</MouseParallaxChild>

		</MouseParallaxContainer>

		:
			<main className="smallAbout">

				<h1 className="smallAbout__h1" tabIndex={0} >{translate("aboutH1")} </h1>

				<p className="smallAbout__description text" tabIndex={0} >{translate("aboutText1")} </p>

				<p className="smallAbout__description text2" tabIndex={0} >{translate("aboutText2")} </p>

				<p className="smallAbout__description text3" tabIndex={0} >{translate("aboutText3")} </p>

				<article className="smallAbout__description-box1"  >

					<p tabIndex={0}>{translate("aboutText4")} </p>
					<img src={process.env.PUBLIC_URL + "/assets/pizza.webp"} alt="" />

				</article>

				<p className="smallAbout__description text3" tabIndex={0} >{translate("aboutText5")} 
				<br /> 
				{translate("aboutText6")} </p>
				<p className="smallAbout__description text2" tabIndex={0} >{translate("aboutText7")} </p>
				<p className="smallAbout__description text" tabIndex={0} >{translate("aboutText8")} 
					<br />{translate("aboutText9")} </p>
			</main>
	)
}

export default About;