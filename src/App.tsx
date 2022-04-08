import React, { Suspense, useContext } from 'react';
import './App.scss';

import Stars from './Components/Stars/Stars';
import {Loader} from './Components/Loader/Loader';
import NameTitle from './Components/NameTitle/NameTitle';
import DesktopNav from './Components/DesktopNav/DesktopNav';
import MobileNav from './Components/MobileNav/MobileNav';
import MobileTitle from './Components/MobileTitle/MobileTitle';
import ChangeLanguage from './Components/ChangeLanguage/ChangeLanguage';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useWindowSize from './Hooks/useWindowSize';

import { LangContext } from './Context/lang';


const Home = React.lazy(() => import("./Pages/Home/Home"));
const MyWork = React.lazy(() => import("./Pages/MyWork/MyWork"));
const Skills = React.lazy(() => import("./Pages/Skills/Skills"));
const About = React.lazy(() => import("./Pages/About/About"));
const Contact = React.lazy(() => import("./Pages/Contact/Contact"));


function App() {

	
	const { dispatch: { translate }} = useContext(LangContext);

	// Taking the window width for the size of the title element
	const dimensions = useWindowSize();

	// State and functions for the mobile device menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const setOpen = () => {
		setIsOpen(!isOpen)
	}
	const onToggle = (toggled:boolean) => {
		toggled ? setIsOpen(true) : setIsOpen(false)
	}
	const handleOnClose = () => {
		setIsOpen(false)
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
		}, 8000)
	})

  	return (
		<div className="App">

			<img className="background" src={process.env.PUBLIC_URL + "assets/background.webp"} alt="Universe draw" />

			<NameTitle className={`${showTitle ? "show" : "hide	"} ${dimensions.width < 768 ? "smallTitle" : "bigTitle"}`} />
			
			{showContent && <Stars />}

			<div className={`App__content ${showContent ? "show" : "hide"}`} >

				{dimensions.width > 767 ?
					<DesktopNav translate={translate} />
					:
					<>
						<MobileTitle translate={translate}/>
						<MobileNav 
						isOpen={isOpen}
						setOpen={setOpen}
						onToggle={onToggle}
						handleOnClose={handleOnClose}
						translate={translate} />
					</>
				}


				<ChangeLanguage screen={dimensions.width > 767 ? "large" : "small"} />

				<Routes>
					<Route path="/" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<Home translate={translate} />
						</React.Suspense>
					}/>
					<Route path="/mywork" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<MyWork translate={translate}/>
						</React.Suspense>
					}/>
					<Route path="/skills" element={
						<Suspense fallback={<Loader className="page__loader" />}>
							<Skills translate={translate}/>
						</Suspense>
					}/>
					<Route path="/about" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<About translate={translate}/>
						</React.Suspense>
					}/>
					<Route path="/contact" element={
						<React.Suspense fallback={<Loader className="page__loader" />}>
							<Contact translate={translate}/>
						</React.Suspense>
					}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
