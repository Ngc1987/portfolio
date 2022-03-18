import React from "react";
import "./MyWork.scss";
import { WorkSampleDatas } from '../../WorkSampleDatas/WorkSampleDatas';
import WorkSample from "../../Components/WorkSample/WorkSample";

const MyWork = () => {

	console.log(WorkSampleDatas)
	return (
		<section className="mywork" >
			<div className="mywork__description">
				<p>Here is some of my work.</p>
				<br />
				<p>Click on "Live démo" to visit the website, or click on the GitHub logo to see my repo on GitHub.</p>
				<br />
				<p>If you have some questions or just want to contact me, click on the "Contact" button 👽</p>
			</div>
			<div className="mywork__samples">
				{WorkSampleDatas.map((obj, index) => {
					return (<WorkSample title={obj.title}
										image={obj.image}
										description={obj.description}
										githubLink={obj.githubLink}
										liveDemoLink={obj.liveDemoLink}
										key={index} />)
				})}

				<WorkSample title="de" image="frg" description="dessss" githubLink="githublink" liveDemoLink="livelink" />
			</div>
		</section>
	)
}

export default MyWork;