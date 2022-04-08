import React, { PropsWithChildren, ReactElement } from 'react';
import "./Loader.scss";

export type LoaderProps = {
	/** The class name of the loader, page__loader or smallPic__loader */
	className: string;
}


/**
 * Renders a loader
 * 
 * @template LoaderProps 
 * @category Component
 * @default Loader
 * @returns A beautiful glow loader
 */
export function Loader({className}:LoaderProps):ReactElement  {
  return (
	<div className={className} data-testid="loader" >
		<div className={`${className}__ring`}>
		</div>
	</div>
  )
}
