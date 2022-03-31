import React from 'react';
import "./Home.scss";

import Earth from '../../Components/Earth/Earth';
import FlyingAlien from '../../Components/FlyingAlien/FlyingAlien';


const Home:React.FC = () => {

	return (
		
		<section className="home" >

			<div className="home__description">
				<h2>Hi everyone, i'm 
					<em className="alienFont" >mwncbzudz grge </em>
					<span></span> and i come from 
					<em className="alienFont" >sfdhbjbty</em>
				</h2>
				<br />
				<br />
				<p>In your planet, you can call me Thomas Semeria.</p>
				<br />
				<p>I'm a front-end developer, and open to work on Earth.</p>
				<br />
				<p>Don't worry, my flying saucer is working with antimatter and not Earth petrol, so it's not a problem for me to fly to your beautiful planet.</p>
				<br />
				<p>And if you need me really fast, i can come with my pocket teleporter.</p>
				<br />
				<p>Visit the other pages of my portfolio to see some work of me, to know me a little more, to check my experience or to contact me.</p>
			</div>

			<div className="home__anim">
				<div className="home__anim-alien">
					<FlyingAlien />
				</div>
				<div className="home__anim-hello">
					<p>Hello World !</p>
				</div>
				<div className="home__anim-earth">
					<Earth />
				</div>

			</div>
			
		</section>
	)
}

export default Home;