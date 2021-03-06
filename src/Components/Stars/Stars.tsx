import React from 'react';
import "./Stars.scss";

const Stars:React.FC = () => {
	return (
		<div className="stars" data-testid="stars">
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
			<div className="star"></div>
		</div>
	)
}

export default Stars;