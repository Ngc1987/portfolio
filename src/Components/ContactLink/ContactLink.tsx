import React from 'react';
import "./ContactLink.scss";

import { SiLinkedin, SiGithub } from 'react-icons/si';
import { MdAttachEmail } from 'react-icons/md';
import { FaPhoneSquare } from 'react-icons/fa';

type Props = {
	type: string;
}

const ContactLink:React.FC<Props> = ({type}) => {
	return (
		<div className="contactLink" >
			{
				type === "linkedin" ? 
						<a href="https://www.linkedin.com/in/thomas-semeria-a5217aa1/">
							<SiLinkedin/>
						</a>  : 
				type === "github" ? 
						<a href="https://github.com/Ngc1987">
							<SiGithub/> 
						</a> : 
				type === "mail" ? 
						<a href="mailto:tsemeri@gmail.com">
							<MdAttachEmail/>
						</a>  : 
						<a href="tel:+33614382452">
							<FaPhoneSquare/>
						</a>		
			}
			<p>
				{
				type === "linkedin" ? "LinkedIn" : 
				type === "github" ? "GitHub": 
				type === "mail" ? "Email" : 
									"Phone" 
			}
			</p>
		</div>
	)
}

export default ContactLink