import React, { Suspense } from 'react';
import './App.scss';

import Stars from './Components/Stars/Stars';
import Loader from './Components/Loader/Loader';
import NameTitle from './Components/NameTitle/NameTitle';
import DesktopNav from './Components/DesktopNav/DesktopNav';
import MobileNav from './Components/MobileNav/MobileNav';
import MobileTitle from './Components/MobileTitle/MobileTitle';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useWindowSize, {WindowSize} from './Hooks/useWindowSize';

const Home = React.lazy(() => import("./Pages/Home/Home"));
const MyWork = React.lazy(() => import("./Pages/MyWork/MyWork"));
const CV = React.lazy(() => import("./Pages/CV/CV"));
const About = React.lazy(() => import("./Pages/About/About"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));


function App() {

	// Taking the window width for the size of the title element
	const dimensions = useWindowSize();

	// State and functions for the mobile device menu
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

	//
	useEffect(() => {
		setTimeout(() => {
			setShowTitle(false);
			setShowContent(true)
		}, 7000)
	})

  	return (
		<div className="App">

			<img className="background" src={process.env.PUBLIC_URL + "assets/background.webp"} alt="Universe draw" />

			<NameTitle className={`${showTitle ? "show" : "hide	"} ${dimensions.width < 768 ? "smallTitle" : "bigTitle"}`} />
			
			{showContent && <Stars />}

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
						handleOnClose={handleOnClose}/>
					</>
				}

				<Routes>
					<Route path="/" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<Home/>
						</React.Suspense>
					}/>
					<Route path="/mywork" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<MyWork/>
						</React.Suspense>
					}/>
					<Route path="/cv" element={
						<Suspense fallback={<Loader className="page__loader" />}>
							<CV/>
						</Suspense>
					}/>
					<Route path="/about" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<About/>
						</React.Suspense>
					}/>
					<Route path="/contact" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<Contact/>
						</React.Suspense>
					}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
