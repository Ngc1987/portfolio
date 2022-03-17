import React, { useEffect, useState } from 'react';
import "./Home.scss"
import Title from '../../Components/Title/Title';
import HiAlien from '../../Components/HiAlien/HiAlien';

const Home:React.FC = (props) => {



	return (
		
		<div className="home" >
			<div className="home__hiAlien">
				<HiAlien />
			</div>
			
		</div>
	)
}

export default Home