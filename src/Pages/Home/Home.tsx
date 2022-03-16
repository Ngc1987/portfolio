import React, { useEffect, useState } from 'react';
import Title from '../../Components/Title/Title';

const Home:React.FC = () => {

	// State to show or no the title
	const [showTitle, setShowTitle] = useState<boolean>(true);
	
	// State to show or no the content
	const [showContent, setShowContent] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShowTitle(false);
			setShowContent(true)
		}, 7000)
	})

	return (
		
			<Title className={showTitle ? "show" : "hide"}  />
	)
}

export default Home