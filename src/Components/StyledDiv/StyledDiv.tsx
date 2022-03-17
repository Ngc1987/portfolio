import React from 'react';
import "./StyledDiv.scss";

interface Props {
	className: string;
}

const StyledDiv:React.FC<Props> = ({className}) => {
	return (
		<div className={`styledDiv ${className}`} >StyledDiv</div>
	)
}

export default StyledDiv