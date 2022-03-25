import React from "react";
import "./Contact.scss";

import ContactLink from "../../Components/ContactLink/ContactLink";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Alien from "../../Components/Alien/Alien";


const Contact:React.FC = () => {

	return (
		<section className="contact" >
			<div className="contact__description">
				<h2>
					Here are the links through which you can follow or contact me.
				</h2>
				<br />
				<p>You can also complete the below form.</p>
			</div>
			<div className="contact__links">
				<ContactLink type="linkedin" />
				<ContactLink type="mail" />
				<ContactLink type="phone" />
				<ContactLink type="github" />
			</div>
			<div className="contact__form">
				<ContactForm/>
			</div>

		</section>
	)
}

export default Contact;