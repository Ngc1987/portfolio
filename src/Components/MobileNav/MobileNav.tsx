import React from 'react';
import "./MobileNav.scss";
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export type MobileNavProps = {
	isOpen: boolean;
	setOpen: () => void;
	onToggle: (toggled: boolean) => void;
	handleOnClose: () => void;
	translate: (key: string) => void;
}

const MobileNav:React.FC<MobileNavProps> = ({isOpen, setOpen, onToggle, handleOnClose, translate}) => {

	// Checking the browser to set a different background color to the mobile menu (because the backdrop-filter property doesn't work on mozilla)
	const navigateur = navigator.userAgent;
	// console.log(navigateur)

	return (
		<nav role="navigation" aria-label="Mobile navigation menu" >
			<div className="mobileNav__button" aria-controls="toggleNavbar" aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation">
					<HamburgerButton toggled={isOpen} toggle={setOpen} onToggle={onToggle}/>
			</div>

			<Menu right 
				className={`mobileNav__menu ${!navigateur.includes("Chrome") ? "mozilla" : "others"}`}
				pageWrapId={ "page-wrap" }
				width={ '250px' }
				isOpen={isOpen}
				overlayClassName={"mobileNav__menu-overlay"}
				onClose={ handleOnClose }
				id="toggleNavbar"
				>

				<h2 style={!navigateur.includes("Chrome") ? {color: "black"} : {color: "white"}} >{translate("mobileMenuTitle")} </h2>

				<Link className="mobileNav__menu-link" 
					to="/" 
					onClick={(e) => {setOpen();}}>
						{translate("navMenu1")} </Link>

				<Link className="mobileNav__menu-link" 
					to="mywork" 
					onClick={(e) => {setOpen();}}>
						{translate("navMenu2")} </Link>

				<Link className="mobileNav__menu-link" 
					to="skills" 
					onClick={(e) => {setOpen();}}>
						{translate("navMenu3")} </Link>

				<Link className="mobileNav__menu-link" 
					to="about" 
					onClick={(e) => {setOpen();}}>
						{translate("navMenu4")} </Link>

				<Link className="mobileNav__menu-link" 
					to="contact" 
					onClick={(e) => {setOpen();}}>
					{translate("navMenu5")} </Link>
			</Menu>
		</nav>
	)
}

export default MobileNav;