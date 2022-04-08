import React, { ReactElement } from 'react';
import "./MobileTitle.scss";
import usePathname from '../../Hooks/usePathname';


export type MobileTitleProps = {
	translate: (key: string) => void;
}

function MobileTitle({translate}:MobileTitleProps):ReactElement {

	const pathName = usePathname();

	return (
		<h1 data-testid="mobileTitle" className={`mobileTitle ${pathName === "/" ? "blue" :
									pathName === "/mywork" ? "purple" :
									pathName === "/skills" ? "red" :
									pathName === "/about" ? "orange" : "green"}`} >
					
								{translate(`mobileTitle${pathName}`)} </h1>
	)
}

export default MobileTitle;