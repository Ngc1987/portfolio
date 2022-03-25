import './App.scss';
import Stars from './Components/Stars/Stars';
import Title from './Components/Title/Title';
import DesktopNav from './Components/DesktopNav/DesktopNav';
import MobileNav from './Components/MobileNav/MobileNav';
import MobileTitle from './Components/MobileTitle/MobileTitle';
import Home from './Pages/Home/Home';
import MyWork from './Pages/MyWork/MyWork';
import CV from './Pages/CV/CV';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useWindowSize from './Hooks/useWindowSize';

function App() {

	// Taking the window width for the size of the title element
	const dimensions = useWindowSize();

	// State anf functions for the mobile device menu
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

	// State to show or no the title
	const [showTitle, setShowTitle] = useState<boolean>(true);
	
	// State to show or no the content
	const [showContent, setShowContent] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShowTitle(false);
			setShowContent(true)
		}, 700)
	})

  	return (
		<div className="App">

			<img className="background" src={process.env.PUBLIC_URL + "assets/background.jpg"} alt="" />

			<Stars />
				<Title className={`${showTitle ? "show" : "hide	"} ${dimensions.width < 768 ? "smallTitle" : "bigTitle"}`} />
				
				<div className={`App__content ${showContent ? "show" : "hide"}`} >
					{dimensions.width > 767 ?
						<DesktopNav />
						:
						<>
							<MobileTitle/>
							<MobileNav 
							isOpen={isOpen}
							setOpen={setOpen}
							onToggle={onToggle}
							handleOnClose={handleOnClose}
							/>
						</>
					}

					<Routes>
						<Route path="/" element={<Home/>}  />
						<Route path="/mywork" element={<MyWork/>}  />
						<Route path="/cv" element={<CV/>}  />
						<Route path="/about" element={<About/>}  />
						<Route path="/contact" element={<Contact/>}  />
					</Routes>

				</div>
		</div>
	);
}

export default App;
