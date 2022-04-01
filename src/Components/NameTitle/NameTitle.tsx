import React, { useRef } from 'react';
import "./NameTitle.scss";

type Props = {
	className: string;
}

const NameTitle:React.FC<Props> = ({className}) => {

	// Making a refs array
	const revealRefs = useRef<SVGPathElement[]>([]);
    revealRefs.current = [];
 
	// Adding each ref on the refs array
    const pathRef = (el: SVGPathElement):void => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

	// Fetch the path length for each ref to set the css properties. Only needed for dev .
	// useEffect(() => {
	// 	// console.log(revealRefs);
	// 	revealRefs.current.forEach((el) => {
	// 		if(el instanceof SVGPathElement) {
	// 			const line = el.getTotalLength();
	// 		}
	// 	})
		
	// })
	
	return (
		
		<div className={`title ${className}`} tabIndex={0} data-testid="nameTitle" >
			<svg className="title__svg" width="444" height="192" viewBox="0 0 444 192" fill="none" xmlns="http://www.w3.org/2000/svg" aria-describedby="titre description">
				<title id="titre">Thomas Semeria's portfolio</title>
   				<desc id="description">Animate logo of thomas semeria's portfolio</desc>
				<mask id="path-1-inside-1_2_5" fill="white">
				<path ref={pathRef} d="M59.76 0L57.06 15H40.56L34.74 48H16.74L22.56 15H6.05999L8.75999 0H59.76Z"/>
				<path ref={pathRef} d="M113.76 0L105.24 48H87.24L90.36 30.3H75.36L72.24 48H54.24L62.76 0H80.76L77.64 17.7H92.64L95.76 0H113.76Z"/>
				<path ref={pathRef} d="M163.86 20.04C163.86 27.52 160.68 34.1 154.32 39.78C148.16 45.26 141.3 48 133.74 48C127.78 48 122.74 46.16 118.62 42.48C114.3 38.68 112.14 33.84 112.14 27.96C112.14 20.48 115.32 13.9 121.68 8.22C127.84 2.74 134.7 0 142.26 0C148.22 0 153.26 1.84 157.38 5.52C161.7 9.32 163.86 14.16 163.86 20.04ZM147.42 22.62C147.42 20.46 146.64 18.66 145.08 17.22C143.56 15.74 141.72 15 139.56 15C136.84 15 134.32 16.06 132 18.18C129.72 20.3 128.58 22.72 128.58 25.44C128.58 27.6 129.34 29.4 130.86 30.84C132.42 32.28 134.28 33 136.44 33C139.16 33 141.66 31.94 143.94 29.82C146.26 27.7 147.42 25.3 147.42 22.62Z"/>
				<path ref={pathRef} d="M227.76 0L219.24 48H201.24L203.94 33L190.74 48L182.94 33L180.24 48H162.24L170.76 0H188.76L196.56 15L209.76 0H227.76Z"/>
				<path ref={pathRef} d="M276.217 48H257.617L257.137 42H243.457L240.817 48H222.217L243.337 0H272.137L276.217 48ZM256.057 30L254.857 16.02L248.737 30H256.057Z"/>
				<path ref={pathRef} d="M335.76 0L333.06 15H313.98C313.02 15 312.54 15.52 312.54 16.56C312.54 16.68 315.1 18.96 320.22 23.4C322.7 25.56 323.94 28.36 323.94 31.8C323.94 36.16 322.04 39.98 318.24 43.26C314.6 46.42 310.58 48 306.18 48H279.24L281.94 33H299.76C300.72 33 301.2 32.46 301.2 31.38C301.2 31.3 298.8 29.24 294 25.2C291.92 23.44 290.88 20.98 290.88 17.82C290.88 13.18 292.68 9.06 296.28 5.46C299.92 1.82 304.08 0 308.76 0H335.76Z"/>
				<path ref={pathRef} d="M56.76 72L54.06 87H34.98C34.02 87 33.54 87.52 33.54 88.56C33.54 88.68 36.1 90.96 41.22 95.4C43.7 97.56 44.94 100.36 44.94 103.8C44.94 108.16 43.04 111.98 39.24 115.26C35.6 118.42 31.58 120 27.18 120H0.23999L2.93999 105H20.76C21.72 105 22.2 104.46 22.2 103.38C22.2 103.3 19.8 101.24 15 97.2C12.92 95.44 11.88 92.98 11.88 89.82C11.88 85.18 13.68 81.06 17.28 77.46C20.92 73.82 25.08 72 29.76 72H56.76Z"/>
				<path ref={pathRef} d="M107.737 72L105.037 87H75.0366L74.6166 89.7H92.6166L90.3366 102.3H72.3366L71.9166 105H101.917L99.2166 120H51.2166L59.7365 72H107.737Z"/>
				<path ref={pathRef} d="M167.713 72L159.193 120H141.193L143.893 105L130.693 120L122.893 105L120.193 120H102.193L110.713 72H128.713L136.513 87L149.713 72H167.713Z"/>
				<path ref={pathRef} d="M218.69 72L215.99 87H185.99L185.57 89.7H203.57L201.29 102.3H183.29L182.87 105H212.87L210.17 120H162.17L170.69 72H218.69Z"/>
				<path ref={pathRef} d="M270.026 85.62C270.026 89.38 268.706 92.94 266.066 96.3C263.546 99.5 260.466 101.76 256.826 103.08C257.346 104.36 258.286 105 259.646 105H269.846L267.146 120H251.546C247.546 120 243.906 118 240.626 114L233.726 105.6L231.146 120H213.146L217.706 94.2H247.106C248.146 94.2 249.126 93.78 250.046 92.94C250.966 92.06 251.426 91.1 251.426 90.06C251.426 89.22 251.126 88.5 250.526 87.9C249.926 87.3 249.206 87 248.366 87H218.966L221.666 72H255.866C259.786 72 263.126 73.3 265.886 75.9C268.646 78.5 270.026 81.74 270.026 85.62Z"/>
				<path ref={pathRef} d="M296.69 72L288.17 120H270.17L278.69 72H296.69Z"/>
				<path ref={pathRef} d="M345.193 120H326.593L326.113 114H312.433L309.793 120H291.193L312.313 72H341.113L345.193 120ZM325.033 102L323.833 88.02L317.713 102H325.033Z"/>
				<path ref={pathRef} d="M365.077 77.04C365.077 79.2 363.957 81.84 361.717 84.96C359.357 88.16 357.157 89.84 355.117 90L357.937 84C356.497 84 355.297 83.52 354.337 82.56C353.377 81.6 352.897 80.42 352.897 79.02C352.897 77.22 353.637 75.6 355.117 74.16C356.597 72.72 358.237 72 360.037 72C361.477 72 362.677 72.48 363.637 73.44C364.597 74.4 365.077 75.6 365.077 77.04Z"/>
				<path ref={pathRef} d="M419.713 72L417.013 87H397.933C396.973 87 396.493 87.52 396.493 88.56C396.493 88.68 399.053 90.96 404.173 95.4C406.653 97.56 407.893 100.36 407.893 103.8C407.893 108.16 405.993 111.98 402.193 115.26C398.553 118.42 394.533 120 390.133 120H363.193L365.893 105H383.713C384.673 105 385.153 104.46 385.153 103.38C385.153 103.3 382.753 101.24 377.953 97.2C375.873 95.44 374.833 92.98 374.833 89.82C374.833 85.18 376.633 81.06 380.233 77.46C383.873 73.82 388.033 72 392.713 72H419.713Z"/>
				<path ref={pathRef} d="M57 158.16C57 163.04 54.9 167.5 50.7 171.54C46.5 175.58 41.94 177.6 37.02 177.6H20.82L18.24 192H0.23999L4.79999 166.2H34.2C35.24 166.2 36.22 165.78 37.14 164.94C38.06 164.06 38.52 163.1 38.52 162.06C38.52 161.22 38.22 160.5 37.62 159.9C37.02 159.3 36.3 159 35.46 159H6.05999L8.75999 144H42.96C46.88 144 50.2 145.38 52.92 148.14C55.64 150.9 57 154.24 57 158.16Z"/>
				<path ref={pathRef} d="M109.86 164.04C109.86 171.52 106.68 178.1 100.32 183.78C94.16 189.26 87.3 192 79.74 192C73.78 192 68.74 190.16 64.62 186.48C60.3 182.68 58.14 177.84 58.14 171.96C58.14 164.48 61.32 157.9 67.68 152.22C73.84 146.74 80.7 144 88.26 144C94.22 144 99.26 145.84 103.38 149.52C107.7 153.32 109.86 158.16 109.86 164.04ZM93.42 166.62C93.42 164.46 92.64 162.66 91.08 161.22C89.56 159.74 87.72 159 85.56 159C82.84 159 80.32 160.06 78 162.18C75.72 164.3 74.58 166.72 74.58 169.44C74.58 171.6 75.34 173.4 76.86 174.84C78.42 176.28 80.28 177 82.44 177C85.16 177 87.66 175.94 89.94 173.82C92.26 171.7 93.42 169.3 93.42 166.62Z"/>
				<path ref={pathRef} d="M165.12 157.62C165.12 161.38 163.8 164.94 161.16 168.3C158.64 171.5 155.56 173.76 151.92 175.08C152.44 176.36 153.38 177 154.74 177H164.94L162.24 192H146.64C142.64 192 139 190 135.72 186L128.82 177.6L126.24 192H108.24L112.8 166.2H142.2C143.24 166.2 144.22 165.78 145.14 164.94C146.06 164.06 146.52 163.1 146.52 162.06C146.52 161.22 146.22 160.5 145.62 159.9C145.02 159.3 144.3 159 143.46 159H114.06L116.76 144H150.96C154.88 144 158.22 145.3 160.98 147.9C163.74 150.5 165.12 153.74 165.12 157.62Z"/>
				<path ref={pathRef} d="M222.041 144L219.341 159H202.841L197.021 192H179.021L184.841 159H168.341L171.041 144H222.041Z"/>
				<path ref={pathRef} d="M273.041 144L270.341 159H240.341L239.921 161.7H257.921L255.641 174.3H237.641L234.521 192H216.521L225.041 144H273.041Z"/>
				<path ref={pathRef} d="M320.446 164.04C320.446 171.52 317.266 178.1 310.906 183.78C304.746 189.26 297.886 192 290.326 192C284.366 192 279.326 190.16 275.206 186.48C270.886 182.68 268.726 177.84 268.726 171.96C268.726 164.48 271.906 157.9 278.266 152.22C284.426 146.74 291.286 144 298.846 144C304.806 144 309.846 145.84 313.966 149.52C318.286 153.32 320.446 158.16 320.446 164.04ZM304.006 166.62C304.006 164.46 303.226 162.66 301.666 161.22C300.146 159.74 298.306 159 296.146 159C293.426 159 290.906 160.06 288.586 162.18C286.306 164.3 285.166 166.72 285.166 169.44C285.166 171.6 285.926 173.4 287.446 174.84C289.006 176.28 290.866 177 293.026 177C295.746 177 298.246 175.94 300.526 173.82C302.846 171.7 304.006 169.3 304.006 166.62Z"/>
				<path ref={pathRef} d="M366.526 177L363.826 192H318.826L327.346 144H345.346L339.526 177H366.526Z"/>
				<path ref={pathRef} d="M393.369 144L384.849 192H366.849L375.369 144H393.369Z"/>
				<path ref={pathRef} d="M443.493 164.04C443.493 171.52 440.313 178.1 433.953 183.78C427.793 189.26 420.933 192 413.373 192C407.413 192 402.373 190.16 398.253 186.48C393.933 182.68 391.773 177.84 391.773 171.96C391.773 164.48 394.953 157.9 401.313 152.22C407.473 146.74 414.333 144 421.893 144C427.853 144 432.893 145.84 437.013 149.52C441.333 153.32 443.493 158.16 443.493 164.04ZM427.053 166.62C427.053 164.46 426.273 162.66 424.713 161.22C423.193 159.74 421.353 159 419.193 159C416.473 159 413.953 160.06 411.633 162.18C409.353 164.3 408.213 166.72 408.213 169.44C408.213 171.6 408.973 173.4 410.493 174.84C412.053 176.28 413.913 177 416.073 177C418.793 177 421.293 175.94 423.573 173.82C425.893 171.7 427.053 169.3 427.053 166.62Z"/>
				</mask>
				<path d="M59.76 0L57.06 15H40.56L34.74 48H16.74L22.56 15H6.05999L8.75999 0H59.76Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M113.76 0L105.24 48H87.24L90.36 30.3H75.36L72.24 48H54.24L62.76 0H80.76L77.64 17.7H92.64L95.76 0H113.76Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M163.86 20.04C163.86 27.52 160.68 34.1 154.32 39.78C148.16 45.26 141.3 48 133.74 48C127.78 48 122.74 46.16 118.62 42.48C114.3 38.68 112.14 33.84 112.14 27.96C112.14 20.48 115.32 13.9 121.68 8.22C127.84 2.74 134.7 0 142.26 0C148.22 0 153.26 1.84 157.38 5.52C161.7 9.32 163.86 14.16 163.86 20.04ZM147.42 22.62C147.42 20.46 146.64 18.66 145.08 17.22C143.56 15.74 141.72 15 139.56 15C136.84 15 134.32 16.06 132 18.18C129.72 20.3 128.58 22.72 128.58 25.44C128.58 27.6 129.34 29.4 130.86 30.84C132.42 32.28 134.28 33 136.44 33C139.16 33 141.66 31.94 143.94 29.82C146.26 27.7 147.42 25.3 147.42 22.62Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M227.76 0L219.24 48H201.24L203.94 33L190.74 48L182.94 33L180.24 48H162.24L170.76 0H188.76L196.56 15L209.76 0H227.76Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M276.217 48H257.617L257.137 42H243.457L240.817 48H222.217L243.337 0H272.137L276.217 48ZM256.057 30L254.857 16.02L248.737 30H256.057Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M335.76 0L333.06 15H313.98C313.02 15 312.54 15.52 312.54 16.56C312.54 16.68 315.1 18.96 320.22 23.4C322.7 25.56 323.94 28.36 323.94 31.8C323.94 36.16 322.04 39.98 318.24 43.26C314.6 46.42 310.58 48 306.18 48H279.24L281.94 33H299.76C300.72 33 301.2 32.46 301.2 31.38C301.2 31.3 298.8 29.24 294 25.2C291.92 23.44 290.88 20.98 290.88 17.82C290.88 13.18 292.68 9.06 296.28 5.46C299.92 1.82 304.08 0 308.76 0H335.76Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M56.76 72L54.06 87H34.98C34.02 87 33.54 87.52 33.54 88.56C33.54 88.68 36.1 90.96 41.22 95.4C43.7 97.56 44.94 100.36 44.94 103.8C44.94 108.16 43.04 111.98 39.24 115.26C35.6 118.42 31.58 120 27.18 120H0.23999L2.93999 105H20.76C21.72 105 22.2 104.46 22.2 103.38C22.2 103.3 19.8 101.24 15 97.2C12.92 95.44 11.88 92.98 11.88 89.82C11.88 85.18 13.68 81.06 17.28 77.46C20.92 73.82 25.08 72 29.76 72H56.76Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M107.737 72L105.037 87H75.0366L74.6166 89.7H92.6166L90.3366 102.3H72.3366L71.9166 105H101.917L99.2166 120H51.2166L59.7365 72H107.737Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M167.713 72L159.193 120H141.193L143.893 105L130.693 120L122.893 105L120.193 120H102.193L110.713 72H128.713L136.513 87L149.713 72H167.713Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M218.69 72L215.99 87H185.99L185.57 89.7H203.57L201.29 102.3H183.29L182.87 105H212.87L210.17 120H162.17L170.69 72H218.69Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M270.026 85.62C270.026 89.38 268.706 92.94 266.066 96.3C263.546 99.5 260.466 101.76 256.826 103.08C257.346 104.36 258.286 105 259.646 105H269.846L267.146 120H251.546C247.546 120 243.906 118 240.626 114L233.726 105.6L231.146 120H213.146L217.706 94.2H247.106C248.146 94.2 249.126 93.78 250.046 92.94C250.966 92.06 251.426 91.1 251.426 90.06C251.426 89.22 251.126 88.5 250.526 87.9C249.926 87.3 249.206 87 248.366 87H218.966L221.666 72H255.866C259.786 72 263.126 73.3 265.886 75.9C268.646 78.5 270.026 81.74 270.026 85.62Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M296.69 72L288.17 120H270.17L278.69 72H296.69Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M345.193 120H326.593L326.113 114H312.433L309.793 120H291.193L312.313 72H341.113L345.193 120ZM325.033 102L323.833 88.02L317.713 102H325.033Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M365.077 77.04C365.077 79.2 363.957 81.84 361.717 84.96C359.357 88.16 357.157 89.84 355.117 90L357.937 84C356.497 84 355.297 83.52 354.337 82.56C353.377 81.6 352.897 80.42 352.897 79.02C352.897 77.22 353.637 75.6 355.117 74.16C356.597 72.72 358.237 72 360.037 72C361.477 72 362.677 72.48 363.637 73.44C364.597 74.4 365.077 75.6 365.077 77.04Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M419.713 72L417.013 87H397.933C396.973 87 396.493 87.52 396.493 88.56C396.493 88.68 399.053 90.96 404.173 95.4C406.653 97.56 407.893 100.36 407.893 103.8C407.893 108.16 405.993 111.98 402.193 115.26C398.553 118.42 394.533 120 390.133 120H363.193L365.893 105H383.713C384.673 105 385.153 104.46 385.153 103.38C385.153 103.3 382.753 101.24 377.953 97.2C375.873 95.44 374.833 92.98 374.833 89.82C374.833 85.18 376.633 81.06 380.233 77.46C383.873 73.82 388.033 72 392.713 72H419.713Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M57 158.16C57 163.04 54.9 167.5 50.7 171.54C46.5 175.58 41.94 177.6 37.02 177.6H20.82L18.24 192H0.23999L4.79999 166.2H34.2C35.24 166.2 36.22 165.78 37.14 164.94C38.06 164.06 38.52 163.1 38.52 162.06C38.52 161.22 38.22 160.5 37.62 159.9C37.02 159.3 36.3 159 35.46 159H6.05999L8.75999 144H42.96C46.88 144 50.2 145.38 52.92 148.14C55.64 150.9 57 154.24 57 158.16Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M109.86 164.04C109.86 171.52 106.68 178.1 100.32 183.78C94.16 189.26 87.3 192 79.74 192C73.78 192 68.74 190.16 64.62 186.48C60.3 182.68 58.14 177.84 58.14 171.96C58.14 164.48 61.32 157.9 67.68 152.22C73.84 146.74 80.7 144 88.26 144C94.22 144 99.26 145.84 103.38 149.52C107.7 153.32 109.86 158.16 109.86 164.04ZM93.42 166.62C93.42 164.46 92.64 162.66 91.08 161.22C89.56 159.74 87.72 159 85.56 159C82.84 159 80.32 160.06 78 162.18C75.72 164.3 74.58 166.72 74.58 169.44C74.58 171.6 75.34 173.4 76.86 174.84C78.42 176.28 80.28 177 82.44 177C85.16 177 87.66 175.94 89.94 173.82C92.26 171.7 93.42 169.3 93.42 166.62Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M165.12 157.62C165.12 161.38 163.8 164.94 161.16 168.3C158.64 171.5 155.56 173.76 151.92 175.08C152.44 176.36 153.38 177 154.74 177H164.94L162.24 192H146.64C142.64 192 139 190 135.72 186L128.82 177.6L126.24 192H108.24L112.8 166.2H142.2C143.24 166.2 144.22 165.78 145.14 164.94C146.06 164.06 146.52 163.1 146.52 162.06C146.52 161.22 146.22 160.5 145.62 159.9C145.02 159.3 144.3 159 143.46 159H114.06L116.76 144H150.96C154.88 144 158.22 145.3 160.98 147.9C163.74 150.5 165.12 153.74 165.12 157.62Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M222.041 144L219.341 159H202.841L197.021 192H179.021L184.841 159H168.341L171.041 144H222.041Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M273.041 144L270.341 159H240.341L239.921 161.7H257.921L255.641 174.3H237.641L234.521 192H216.521L225.041 144H273.041Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M320.446 164.04C320.446 171.52 317.266 178.1 310.906 183.78C304.746 189.26 297.886 192 290.326 192C284.366 192 279.326 190.16 275.206 186.48C270.886 182.68 268.726 177.84 268.726 171.96C268.726 164.48 271.906 157.9 278.266 152.22C284.426 146.74 291.286 144 298.846 144C304.806 144 309.846 145.84 313.966 149.52C318.286 153.32 320.446 158.16 320.446 164.04ZM304.006 166.62C304.006 164.46 303.226 162.66 301.666 161.22C300.146 159.74 298.306 159 296.146 159C293.426 159 290.906 160.06 288.586 162.18C286.306 164.3 285.166 166.72 285.166 169.44C285.166 171.6 285.926 173.4 287.446 174.84C289.006 176.28 290.866 177 293.026 177C295.746 177 298.246 175.94 300.526 173.82C302.846 171.7 304.006 169.3 304.006 166.62Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M366.526 177L363.826 192H318.826L327.346 144H345.346L339.526 177H366.526Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M393.369 144L384.849 192H366.849L375.369 144H393.369Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
				<path d="M443.493 164.04C443.493 171.52 440.313 178.1 433.953 183.78C427.793 189.26 420.933 192 413.373 192C407.413 192 402.373 190.16 398.253 186.48C393.933 182.68 391.773 177.84 391.773 171.96C391.773 164.48 394.953 157.9 401.313 152.22C407.473 146.74 414.333 144 421.893 144C427.853 144 432.893 145.84 437.013 149.52C441.333 153.32 443.493 158.16 443.493 164.04ZM427.053 166.62C427.053 164.46 426.273 162.66 424.713 161.22C423.193 159.74 421.353 159 419.193 159C416.473 159 413.953 160.06 411.633 162.18C409.353 164.3 408.213 166.72 408.213 169.44C408.213 171.6 408.973 173.4 410.493 174.84C412.053 176.28 413.913 177 416.073 177C418.793 177 421.293 175.94 423.573 173.82C425.893 171.7 427.053 169.3 427.053 166.62Z" stroke="white" strokeWidth="6" mask="url(#path-1-inside-1_2_5)"/>
			</svg>
			<div className="title__sign">
				<p className="title__sign-by" >By</p>
				<p className="title__sign-name" >Thomas Semeria</p>
			</div>
		</div>

  	)
}

export default NameTitle;