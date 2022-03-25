import React from 'react';
import "./Skill.scss";

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiGit, SiTypescript, SiSass, SiWindowsterminal, SiRedux, SiW3C } from 'react-icons/si';
import { BiDevices } from 'react-icons/bi';

interface Props {
	type: string;
}

const Skill:React.FC<Props> = ({type}) => {
	
	return (
		<div className="skill" >
			{
				type === "html" ? <SiHtml5/> : 
				type === "css" ? <SiCss3/> : 
				type === "javascript" ? <SiJavascript/> : 
				type === "react" ? <SiReact/> : 
				type === "github" ? <SiGithub/> : 
				type === "git" ? <SiGit/> : 
				type === "typescript" ? <SiTypescript/> : 
				type === "sass" ? <SiSass/> : 
				type === "terminal" ? <SiWindowsterminal/> : 
				type === "redux" ? <SiRedux/> : 
				type === "responsive" ? <BiDevices/> : 
									<SiW3C/>
			}
			<p>
				{
				type === "html" ? "HTML" : 
				type === "css" ? "CSS": 
				type === "javascript" ? "Javascript" : 
				type === "react" ? "React" : 
				type === "github" ? "Github" : 
				type === "git" ? "Git" : 
				type === "typescript" ? "Typescript" : 
				type === "sass" ? "Sass" : 
				type === "terminal" ? "Terminal": 
				type === "redux" ? "Redux" : 
				type === "responsive" ? "Responsives websites" : 
									"Web accessibility"
			}
			</p>
		</div>
	)
}

export default Skill;