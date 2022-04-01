import React, { useEffect, useRef } from "react";
import "./About.scss";
import useWindowSize from "../../Hooks/useWindowSize";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";

const About:React.FC = () => {

	gsap.registerPlugin(ScrollTrigger);

	// Create a refs array
	const revealRefs = useRef<HTMLParagraphElement[]>([]);
    revealRefs.current = [];
	// Put all the refs needed on the refs array
    const addToRefs = (el: HTMLParagraphElement):void => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

	// Create the little anim on scroll for each ref
	useEffect(() => {

		revealRefs.current.forEach((el, index) => {
			gsap.fromTo(el,  {
				scale: 0.7,
				opacity: 0.3,
				filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0))"
				// ease: "Expo.easeOut",
				// y:15,
				// duration: 5,
				// repeat: -1, 
				// transformOrigin: "left center", 
			}, {
				scale: 1.1,
				opacity: 1,
				filter: "drop-shadow(15px 10px 7px rgba(0,0,0,20))",
				scrollTrigger: {
					id: `section-${index+1}`,
					trigger: el,
					start: 'top bottom+=20',
					end: 'center 30%',
					toggleActions: "play none none reverse",
					scrub: true,
					// markers: true
				}
			});
		});
	}, []);
	useEffect(() => {
		
		revealRefs.current.forEach((el, index) => {
			gsap.fromTo(el,  {
				scale: 1.1,
				opacity: 1,
				filter: "drop-shadow(15px 10px 7px rgba(0,0,0,20))",
				// ease: "Expo.easeOut",
				// y:15,
				// duration: 5,
				// repeat: -1, 
				// transformOrigin: "left center", 
			}, {
				scale: 0.7,
				opacity: 0.7,
				filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0))",
				scrollTrigger: {
					id: `section-${index+1}`,
					trigger: el,
					start: 'top 20%',
					end: 'center top-=30%',
					toggleActions: "play none none reverse",
					scrub: true,
					// markers: true
				}

			});
		});
	}, []);

	const firstChild = useRef() as React.MutableRefObject<HTMLDivElement>;

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
				<h1 tabIndex={0}>Here i'll go to talk a little of me.</h1>
				<br />
				</MouseParallaxChild>
				<MouseParallaxChild
					 factorX={0.04}
					 factorY={0.04}
					 className="about__description child2" >

				<p className="about__description-text" tabIndex={0} >I'm born in 1st november, on 1987 Earth year.</p>
			</MouseParallaxChild>
			<MouseParallaxChild
					 factorX={0.06}
					 factorY={0.06} 
					 className="about__description child3">
				<p className="about__description-text2" tabIndex={0} >I want to work in Earth because on my planet, the artificial intelligence make the big part of the works for us. 
				</p>
				</MouseParallaxChild>
				<MouseParallaxChild
					 factorX={0.08}
					 factorY={0.08} 
					 className="about__description child3">

				<p className="about__description-text3" tabIndex={0}>
					It's pretty nice, we have all the life time to do what we want, but i really love building websites and applications.
				</p>
			</MouseParallaxChild>
			<MouseParallaxChild
							factorX={0.12}
							factorY={0.12} className="about__articles">

				
					<article className="about__articles__article article1"  >
						<p tabIndex={0}>Also, i really love pizzas, and the best are in Earth.</p>
						<img src={process.env.PUBLIC_URL + "/assets/pizza.webp"} alt="" />
					</article>

			

			</MouseParallaxChild>
				<MouseParallaxChild
						factorX={0.08}
						factorY={0.08} 
						className="about__description">
					<p className="about__description-text3" tabIndex={0} >In my daily life, i like doing some sports and learning some stuffs about sciences and technologies,
						<br /> 
						travels on space and time, and looking some big stars explodes.</p>
							
				</MouseParallaxChild>

				<MouseParallaxChild
							factorX={0.10}
							factorY={0.10}
							className="planet1" >
						<img src={process.env.PUBLIC_URL + "/assets/planet4.webp"} 
							alt="Beautiful exo Saturne"
							/>
			</MouseParallaxChild>
				<MouseParallaxChild
							factorX={0.20}
							factorY={0.15}
							className="planet2" >
						<img src={process.env.PUBLIC_URL + "/assets/redPlanet.webp"} 
							alt="Full water planet"
							/>
			</MouseParallaxChild>
				{/* <MouseParallaxChild
							factorX={0.30}
							factorY={0.15}
							className="planet3" >
						<img src={process.env.PUBLIC_URL + "/assets/planet1.webp"} 
							alt=""
							/>
			</MouseParallaxChild> */}

			{/* <MouseParallaxChild
					 factorX={0.15}
					 factorY={0.15} className="about__alien">
				<HiAlien/>
			</MouseParallaxChild> */}
		</MouseParallaxContainer>

		:
			<main className="smallAbout">

				<h1 className="smallAbout__h1" tabIndex={0} >Here i'll go to talk a little of me.</h1>

				<p className="smallAbout__description text1" tabIndex={0} ref={addToRefs} >I'm born in 1st november, on 1987 Earth year.</p>

				<p className="smallAbout__description text2" tabIndex={0} ref={addToRefs} >I want to work in Earth because on my planet, the artificial intelligence make the big part of the works for us. 
				</p>

				<p className="smallAbout__description text3" tabIndex={0} ref={addToRefs}>
				It's pretty nice, we have all the life time to do what we want, but i really love building websites and applications.
				</p>

				<article className="smallAbout__description-box1" ref={addToRefs}  >

					<p tabIndex={0}>Also, i really love pizzas, and the best are in Earth.</p>
					<img src={process.env.PUBLIC_URL + "/assets/pizza.png"} alt="" />

				</article>

				<p className="smallAbout__description text4" ref={addToRefs} tabIndex={0} >In my daily life, i like doing some sports and learning some stuffs about sciences and technologies,
				<br /> 
				travels on space and time, and looking some big stars explodes.</p>
				<p className="smallAbout__description text3" ref={addToRefs} tabIndex={0} >I also love music, video games, take care of animals, just the simples things of the life 🌳</p>
			</main>
	)
}

export default About;