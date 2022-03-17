import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import "./MobileNav.scss"
import { Link } from 'react-router-dom';

export interface Props  {
	isOpen: boolean;
	setOpen: () => void;
	onToggle: (toggled: boolean) => void;
	handleOnClose: () => void;
}

const MobileNav:React.FC<Props> = ({isOpen, setOpen, onToggle, handleOnClose}) => {

	
	return (
		<>
			<div className="mobileNav__button">
					<HamburgerButton toggled={isOpen} toggle={setOpen} onToggle={onToggle}/>
			</div>

			<Menu right 
				className="mobileNav__menu" 
				pageWrapId={ "page-wrap" }
				width={ '250px' }
				isOpen={isOpen}
				overlayClassName={"mobileNav__menu-overlay"}
				onClose={ handleOnClose }
				>

				<h2>Navigate to</h2>

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
						About
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

export default MobileNav