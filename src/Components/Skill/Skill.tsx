import React from 'react';
import "./Skill.scss";

import { SiTailwindcss, SiJest, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub, SiGit, SiTypescript, SiSass, SiWindowsterminal, SiRedux, SiW3C } from 'react-icons/si';
import { BiDevices } from 'react-icons/bi';

type Props = {
	/** 
	 * Type of the skill 
	 * */
	name: string;
	/** The translate function */
	translate: (key: string) => void;
	/** Index of the element on the data array */
	index: number;
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
const Skill:React.FC<Props> = ({name, translate, index}: Props) => {
	
	return (

		<div className="skill" 
			data-testid="skill" 
			aria-hidden="true" 
			title={`${name} logo`}
			 tabIndex={0} >

			{
				name === "html" ? <SiHtml5 data-testid="skillHtml" /> : 
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
				name === "jest" ? <SiJest/> : 
									<SiW3C/>
			}
			<p>{translate(`cvSkill${index}`)} </p>
		</div>
	)
}

export default Skill;