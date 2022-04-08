import React, { ReactElement } from 'react';
import "./Home.scss";

import Earth from '../../Components/Earth/Earth';
import FlyingAlien from '../../Components/FlyingAlien/FlyingAlien';


export type HomeProps = {
	children?: ReactElement;
	translate: (key: string) => void;
}

/**
 * Renders the Home page
 * 
 * @component
 * 
 * ```tsx
 *		<Home/>
 * ```
 * 
 * @category Pages
 */
function Home({children, translate}:HomeProps):ReactElement {

	return (
		
		<main className="home" >

			<section className="home__description">
				<h1 tabIndex={0} >{translate("homeH1PartOne")}
					<em className="alienFont" >mwncbzudz grge </em>
					<span></span> {translate("homeH1PartTwo")} 
					<em className="alienFont" >sfdhbjbty</em>
				</h1>
				<br />
				<br />
				<p tabIndex={0}>{translate("homeText1")} </p>
				<br />
				<p tabIndex={0}>{translate("homeText2")} </p>
				<br />
				<p tabIndex={0}>{translate("homeText3")} </p>
				<br />
				<p tabIndex={0}>{translate("homeText4")} </p>
				<br />
				<p tabIndex={0}>{translate("homeText5")} </p>
			</section>

			<section className="home__anim">
				<div className="home__anim-alien" tabIndex={0}>
					<FlyingAlien />
				</div>
				<div className="home__anim-hello" tabIndex={0}>
					<p>Hello World !</p>
				</div>
				<div className="home__anim-earth" tabIndex={0}>
					<Earth />
				</div>

			</section>
			
		</main>
	)
}

export default Home;