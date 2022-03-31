import React from 'react';
import "./Skill.scss";

import { SiTailwindcss, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiGit, SiTypescript, SiSass, SiWindowsterminal, SiRedux, SiW3C } from 'react-icons/si';
import { BiDevices } from 'react-icons/bi';

type Props = {
	/** 
	 * Type of the skill 
	 * */
	name: string;
}

/**
 * Component Skill
 * @component
 * @category Components
 * @typedef Props
 * @param name - The name of the icon to display
 * @return  React.ReactNode
 * @remarks
 *  Example of usage
 * ```ts
 *  <Icon name="about" size="2vw" color="about" hover="active"/>
 * ```
 * 
 * @example
 * const name = "github";
 * return (
 * 		<Skill name={name}/>
 * 	)
 */
const Skill:React.FC<Props> = ({name}: Props) => {
	
	return (

		<div>
			{
				name === "html" ? <SiHtml5/> : 
				name === "css" ? <SiCss3/> : 
				name === "javascript" ? <SiJavascript/> : 
				name === "react" ? <SiReact/> : 
				name === "github" ? <SiGithub/> : 
				name === "git" ? <SiGit/> : 
				name === "typescript" ? <SiTypescript/> : 
				name === "sass" ? <SiSass/> : 
				name === "terminal" ? <SiWindowsterminal/> : 
				name === "redux" ? <SiRedux/> : 
				name === "responsive" ? <BiDevices/> : 
				name === "tailwind" ? <SiTailwindcss/> : 
				name === "mongo" ? <SiMongodb/> : 
									<SiW3C/>
			}
			<p>
				{
				name === "html" ? "HTML" : 
				name === "css" ? "CSS": 
				name === "javascript" ? "Javascript" : 
				name === "react" ? "React" : 
				name === "github" ? "Github" : 
				name === "git" ? "Git" : 
				name === "typescript" ? "Typescript" : 
				name === "sass" ? "Sass" : 
				name === "terminal" ? "Terminal": 
				name === "redux" ? "Redux" : 
				name === "mongo" ? "MongoDb" : 
				name === "tailwind" ? "Tailwind CSS" : 
				name === "responsive" ? "Responsives websites" : 
									"Web accessibility"
			}
			</p>
		</div>
	)
}

export default Skill;