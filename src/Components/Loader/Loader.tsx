import React from 'react';
import "./Loader.scss";

type Props = {
	className?: string;
}

const Loader:React.FC<Props> = ({className}) => {
  return (
	<div className={className} >
		<div className={`${className}__ring`}>
			
		</div>
	</div>
  )
}

export default Loader