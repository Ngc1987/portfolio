import React from 'react';
import "./StyledDiv.scss";

type Props = {
	className: string;
}

const StyledDiv:React.FC<Props> = ({className, children}) => {
	return (
		<div className={`styledDiv ${className}`} >{children}</div>
	)
}

export default StyledDiv;