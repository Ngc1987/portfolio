import React from "react";
import "./MyWork.scss";
import { WorkSampleDatas } from '../../Datas/WorkSampleDatas';
import WorkSample from "../../Components/WorkSample/WorkSample";

const MyWork:React.FC = () => {

	return (
		<section className="mywork" >
			<div className="mywork__description">
				<h2>Here is some of my work.</h2>
				<br />
				<p>Click on "Live demo" to visit the website, or click on the GitHub logo to see my repo on GitHub.</p>
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
										key={index}
										inProgress={obj.inProgress} />)
				})}
			</div>
		</section>
	)
}

export default MyWork;