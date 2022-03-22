import React, { useEffect, useRef, useState } from 'react';
import "./Eye.scss";
import useMousePosition from '../../Hooks/useMousePosition';

interface Props {
	className: string;
	size?: string;
	color?: string;
}


const Eye: React.FC<Props> = ({className, size, color}) => {

	// Select the eye element on the page
	const pupille = useRef() as React.MutableRefObject<HTMLDivElement>;

	// States for transformX and transformY properties for the eye style, who need to follow the mouse where ever is on the screen
	const [transformX, setTransformX] = useState<number>(-50);
	const [transformY, setTransformY] = useState<number>(-50);
	
	// Use the custom hook to have the position on the mouse
	const mousePosition = useMousePosition();
	
	useEffect(() => {

		// Taking the position of the pupille on the screen
		const eyePos = pupille.current.getBoundingClientRect();

		if(eyePos) {
			if(mousePosition.x  < eyePos.left) {
				setTransformX(((mousePosition.x  * 100) / (window.innerWidth - (window.innerWidth - eyePos.left)) / 2 ))
			} else {
				setTransformX( 50 + ((((mousePosition.x - eyePos.left) * 100)) / (window.innerWidth - eyePos.left)) / 2 )
			}
			if(mousePosition.y < eyePos.top) {
				setTransformY(((mousePosition.y * 100) / (window.innerHeight - (window.innerHeight - eyePos.top)) / 2 ))
			} else {
				setTransformY( 50 + (((mousePosition.y - eyePos.top) * 100) / (window.innerHeight - eyePos.top)) / 2 )
			}
		}

	}, [ mousePosition])

	// Style for the position of the pupille, who need to follow the mouse no matter where is
	const eyeStyle = {
		top: `${transformY < 12 ? 12 : transformY > 88 ? 88 : transformY}%`,
		left: `${transformX < 15 ? 15 : transformX > 85 ? 85 : transformX}%`, 
		transform: `translate(-${transformX < 15 ? 15 : transformX > 85 ? 85 : transformX}%, -${transformY < 12 ? 12 : transformY > 88 ? 88 : transformY}%)`
	}


	return (
		<div className={`${className} eye ${size && size} ${color && color}`}>
			<div ref={pupille}  className="pupilleDiv">
				<div className="pupille" style={eyeStyle}></div>
			</div>
		</div>
	)
}

export default Eye;