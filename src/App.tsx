import './App.scss';
import Alien from './Components/Alien/Alien';
import HiAlien from './Components/HiAlien/HiAlien';
import FlyingAlien from './Components/FlyingAlien/FlyingAlien';
import Name from './Components/Name/Name';
import Stars from './Components/Stars/Stars';
import Earth from './Components/Earth/Earth';
import DesktopNav from './Components/DesktopNav/DesktopNav';
import MobileNav from './Components/MobileNav/MobileNav';
import Home from './Pages/Home/Home';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

	// state for the window size, differents animations displayed for desktop or mobile device
	const [dimensions, setDimensions] = useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	})
	// Listen resize event, and set the state with the actual values
	useEffect(() => {
		function handleResize() {
			setDimensions({height: window.innerHeight, width: window.innerWidth})
		}
		window.addEventListener('resize', handleResize)
	
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	// State for the mobile device menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	
	const setOpen = () => {
		setIsOpen(!isOpen)
	}

	const handleOnClose = () => {
		setIsOpen(false)
	}
	const onToggle = (toggled:boolean) => {
		toggled ? setIsOpen(true) : setIsOpen(false)
	}



	
	

  	return (
		<div className="App">
			<img className="background" src={process.env.PUBLIC_URL + "assets/background.jpg"} alt="" />
			<Stars />


				{dimensions.width > 767 ?
					<DesktopNav />
					:
					<MobileNav 
					isOpen={isOpen}
					setOpen={setOpen}
					onToggle={onToggle}
					handleOnClose={handleOnClose}
					/>
				}

				<Routes>
					<Route path="/" element={Home}  />
				</Routes>
			
				<div className={`App__content show}`} >
					{/* <Earth /> */}
					{/* <Name/> */}
					{/* <Alien/> */}
					{/* <HiAlien/> */}
					{/* <FlyingAlien /> */}
				</div>
				
			
			
		</div>
	);
}

export default App;
