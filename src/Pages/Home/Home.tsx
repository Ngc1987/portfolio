import React from 'react';
import "./Home.scss";

import Earth from '../../Components/Earth/Earth';
import FlyingAlien from '../../Components/FlyingAlien/FlyingAlien';


const Home:React.FC = () => {

	return (
		
		<main className="home" >

			<section className="home__description">
				<h1 tabIndex={0} >Hi everyone, i'm 
					<em className="alienFont" >mwncbzudz grge </em>
					<span></span> and i come from 
					<em className="alienFont" >sfdhbjbty</em>
				</h1>
				<br />
				<br />
				<p tabIndex={0}>In your planet, you can call me Thomas Semeria.</p>
				<br />
				<p tabIndex={0}>I'm a front-end developer, and open to work on Earth.</p>
				<br />
				<p tabIndex={0}>Don't worry, my flying saucer is working with antimatter and not Earth petrol, so it's not a problem for me to fly to your beautiful planet.</p>
				<br />
				<p tabIndex={0}>And if you need me really fast, i can come with my pocket teleporter.</p>
				<br />
				<p tabIndex={0}>Visit the other pages of my portfolio to see some work of me, to know me a little more, to check my experience or to contact me.</p>
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