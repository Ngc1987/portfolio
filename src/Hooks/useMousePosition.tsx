import { useEffect, useState } from "react";

interface MousePosition {
	x: number;
	y: number;
}

// Listening the mouse positions on the screen (x and y)
const useMousePosition = ():MousePosition => {

	const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

	useEffect(() => {
		const setFromEvent = (e:any):void => setPosition({ x: e.clientX, y: e.clientY });

		window.addEventListener("mousemove", setFromEvent);

		return () => window.removeEventListener("mousemove", setFromEvent);
	}, []);

	return position;
}

export default useMousePosition;