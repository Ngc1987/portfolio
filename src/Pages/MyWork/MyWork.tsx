import React, { ReactElement } from "react";
import "./MyWork.scss";
import { WorkSampleDatas } from '../../Datas/WorkSampleDatas';
import WorkSample from "../../Components/WorkSample/WorkSample";

export type MyWorkProps = {
	children?: ReactElement;
	translate: (key: string) => void;
}

/**
 * Renders the MyWork page
 * 
 * @component
 * 
 * ```tsx
 * <Route path="/about" element={
 *		<React.Suspense fallback={<Loader className="page__loader" />}>
 *				<MyWork/>	
 *		</React.Suspense>
 * ```
 * 
 * @category Pages
 */
export function MyWork({children, translate}:MyWorkProps):ReactElement {

	return (
		<main className="mywork" >
			<section className="mywork__description">
				<h1 tabIndex={0}>{translate("myWorkH1")} </h1>
				<br />
				<p tabIndex={0}>{translate("myWorkText1")} </p>
				<br />
				<p tabIndex={0}>{translate("myWorkText2")} </p>
			</section>
			<section className="mywork__samples">
				{WorkSampleDatas.map((obj, index) => {
					return (<WorkSample title={obj.title}
										image={obj.image}
										description={obj.description}
										githubLink={obj.githubLink}
										liveDemoLink={obj.liveDemoLink}
										key={index}
										inProgress={obj.inProgress}
										index={index}
										translate={translate} />)
				})}
			</section>
		</main>
	)
}

export default MyWork;