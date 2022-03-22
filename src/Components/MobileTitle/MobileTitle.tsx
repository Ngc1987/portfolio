import React from 'react';
import "./MobileTitle.scss";
import usePathname from '../../Hooks/usePathname';

const MobileTitle:React.FC = () => {

	const pathName = usePathname();

	return (
		<h1 className={`mobileTitle ${pathName === "/" ? "blue" :
									pathName === "/mywork" ? "purple" :
									pathName === "/cv" ? "red" :
									pathName === "/about" ? "orange" : "green"}`} >
					
								{
									pathName === "/" ? "Home" :
									pathName === "/mywork" ? "My work" :
									pathName === "/cv" ? "My cv" :
									pathName === "/about" ? "About" : "Contact"
								}
								</h1>
	)
}

export default MobileTitle;