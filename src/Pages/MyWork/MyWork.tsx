import React from "react";
import "./MyWork.scss";
import { WorkSampleDatas } from '../../Datas/WorkSampleDatas';
import WorkSample from "../../Components/WorkSample/WorkSample";

const MyWork:React.FC = () => {

	return (
		<main className="mywork" >
			<section className="mywork__description">
				<h1 tabIndex={0}>Here is some of my work.</h1>
				<br />
				<p tabIndex={0}>Click on "Live demo" to visit the website, or click on the GitHub logo to see my repo on GitHub.</p>
				<br />
				<p tabIndex={0}>If you have some questions or just want to contact me, click on the "Contact" button 👽</p>
			</section>
			<section className="mywork__samples">
				{WorkSampleDatas.map((obj, index) => {
					return (<WorkSample title={obj.title}
										image={obj.image}
										description={obj.description}
										githubLink={obj.githubLink}
										liveDemoLink={obj.liveDemoLink}
										key={index}
										inProgress={obj.inProgress} />)
				})}
			</section>
		</main>
	)
}

export default MyWork;