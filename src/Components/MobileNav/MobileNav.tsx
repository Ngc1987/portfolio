import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import "./MobileNav.scss"

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

				<div className="mobileNav__menu-link" 
					// to="description" 
					data-section="description" 
					onClick={(e) => {
						setOpen();
					}}>
					Home
				</div>
				<div className="mobileNav__menu-link" 
					// to="pourqui" 
					data-section="pourqui" 
					onClick={(e) => {
						setOpen();
					}}>
					Realisations
				</div>
				<div className="mobileNav__menu-link" 
					// to="parcours" 
					data-section="parcours" 
					onClick={(e) => {
						setOpen();
					}}>
					CV
				</div>
				<div className="mobileNav__menu-link" 
					// to="gallerie" 
					data-section="galerie" 
					onClick={(e) => {
						setOpen();
					}}>
					About
				</div>
				<div className="mobileNav__menu-link" 
					// to="contact" 
					data-section="contact" 
					onClick={(e) => {
						setOpen();
					}}>
					Contact
				</div>
			</Menu>
		</>
	)
}

export default MobileNav