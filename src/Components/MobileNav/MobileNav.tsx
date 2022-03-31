import React from 'react';
import "./MobileNav.scss";
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export type Props = {
	isOpen: boolean;
	setOpen: () => void;
	onToggle: (toggled: boolean) => void;
	handleOnClose: () => void;
}

const MobileNav:React.FC<Props> = ({isOpen, setOpen, onToggle, handleOnClose}) => {

	// Checking the browser to set a different background color to the mobile menu (because the backdrop-filter property doesn't work on mozilla)
	const navigateur = navigator.userAgent;
	// console.log(navigateur)

	return (
		<>
			<div className="mobileNav__button">
					<HamburgerButton toggled={isOpen} toggle={setOpen} onToggle={onToggle}/>
			</div>

			<Menu right 
				className={`mobileNav__menu ${!navigateur.includes("Chrome") ? "mozilla" : "others"}`}
				pageWrapId={ "page-wrap" }
				width={ '250px' }
				isOpen={isOpen}
				overlayClassName={"mobileNav__menu-overlay"}
				onClose={ handleOnClose }
				>

				<h2 style={!navigateur.includes("Chrome") ? {color: "black"} : {color: "white"}} >Navigate to</h2>

				<Link className="mobileNav__menu-link" 
					to="/" 
					onClick={(e) => {setOpen();}}>
						Home
				</Link>

				<Link className="mobileNav__menu-link" 
					to="mywork" 
					onClick={(e) => {setOpen();}}>
						My work
				</Link>

				<Link className="mobileNav__menu-link" 
					to="cv" 
					onClick={(e) => {setOpen();}}>
						CV
				</Link>

				<Link className="mobileNav__menu-link" 
					to="about" 
					onClick={(e) => {setOpen();}}>
						About me
				</Link>

				<Link className="mobileNav__menu-link" 
					to="contact" 
					onClick={(e) => {setOpen();}}>
					Contact
				</Link>
			</Menu>
		</>
	)
}

export default MobileNav;