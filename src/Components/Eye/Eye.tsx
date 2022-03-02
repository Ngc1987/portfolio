import React, { useEffect, useRef, useState } from 'react';
import useMousePosition from '../../Hooks/useMousePosition';
import "./Eye.css";


const Eye: React.FC = () => {

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
				// console.log( "MouseX < eyePos.left " + mouseX, mousePosition.x, eyePos.left)
			} else {
				setTransformX( 50 + ((((mousePosition.x - eyePos.left) * 100)) / (window.innerWidth - eyePos.left)) / 2 )
				// console.log( "MouseX > eyePos.left " + mouseX, mousePosition.x, eyePos.left)
			}
			if(mousePosition.y < eyePos.top) {
				setTransformY(((mousePosition.y * 100) / (window.innerHeight - (window.innerHeight - eyePos.top)) / 2 ))
				// console.log( "MouseY < eyePos.top " + mouseX, mousePosition.x, eyePos.left)
			} else {
				setTransformY( 50 + (((mousePosition.y - eyePos.top) * 100) / (window.innerHeight - eyePos.top)) / 2 )
				// console.log( "MouseY > eyePos.top " + mouseX, mousePosition.x, eyePos.left)
			}
		}

	}, [ mousePosition])

	// Style for the position of the pupille, who need to follow the mouse
	const eyeStyle = {
		top: `${transformY < 12 ? 12 : transformY > 88 ? 88 : transformY}%`,
		left: `${transformX < 15 ? 15 : transformX > 85 ? 85 : transformX}%`, 
		transform: `translate(-${transformX < 15 ? 15 : transformX > 85 ? 85 : transformX}%, -${transformY < 12 ? 12 : transformY > 88 ? 88 : transformY}%)`
	}


	return (
		<div className="eye">
			<div className="pupilleDiv">
				<div className="pupille"
					ref={pupille} 
					style={eyeStyle}
					>
				</div>
			</div>
		</div>
	)
}

export default Eye;