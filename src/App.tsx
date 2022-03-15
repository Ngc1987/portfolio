import './App.scss';
import Alien from './Components/Alien/Alien';
import HiAlien from './Components/HiAlien/HiAlien';
import FlyingAlien from './Components/FlyingAlien/FlyingAlien';
import Name from './Components/Name/Name';
import Title from './Components/Title/Title';
import Stars from './Components/Stars/Stars';
import Earth from './Components/Earth/Earth';
import DesktopNav from './Components/DesktopNav/DesktopNav';
import { useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';

function App() {

	const [showTitle, setShowTitle] = useState<boolean>(true);
	const [showContent, setShowContent] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShowTitle(false);
			setShowContent(true)
		}, 7000)
	})

  	return (
		<div className="App">
			<img className="background" src={process.env.PUBLIC_URL + "assets/background.jpg"} alt="" />
			<Stars />

			<Title className={showTitle ? "show" : "hide"}  />

				<DesktopNav/>
			
				<div className={`App__content ${showContent ? "show" : "hide"}`} >
					<Earth />
					{/* <Name/> */}
					{/* <Alien/> */}
					{/* <HiAlien/> */}
					{/* <FlyingAlien /> */}
				</div>
				
			
			
		</div>
	);
}

export default App;
