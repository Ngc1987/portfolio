import React, { useEffect, useState } from 'react';
import "./Home.scss"
import Title from '../../Components/Title/Title';
import Earth from '../../Components/Earth/Earth';
import HiAlien from '../../Components/HiAlien/HiAlien';
import FlyingAlien from '../../Components/FlyingAlien/FlyingAlien';


const Home:React.FC = (props) => {

	



	return (
		
		<div className="home" >

			<div className="home__presentation">
				<p>Hi everyone, i'm <em>mwncbzudz</em> and i come from <em>TGSZIHFD</em></p>
				<br />
				<p>I'm a front-end developer, and open to work on Earth. Don't worry, my flying saucer doesn't work with Earth petrol, so it's not a problem for me to fly to your beautiful planet.</p>
				<br />
				<p>And if you need me really fast, i can come with my pocket teleporter !</p>
				<br />
				<p>Visit the other pages of my portfolio to see some work of me, to know me a little more, to check my experience or to contact me.</p>
			</div>

			<div className="home__alien">
				<FlyingAlien />
			</div>
			<div className="home__earth">
				<Earth />
			</div>
			
		</div>
	)
}

export default Home