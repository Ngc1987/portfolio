import React from "react";
import "./Contact.scss";

import ContactLink from "../../Components/ContactLink/ContactLink";
import ContactForm from "../../Components/ContactForm/ContactForm";


const Contact:React.FC = () => {

	return (
		<main className="contact" >
			<section className="contact__description">
				<h1 tabIndex={0}>
					Here are the links through which you can follow or contact me.
				</h1>
				<br />
				<p tabIndex={0}>You can also complete the below form.</p>
			</section>
			<section className="contact__links">
				<ContactLink type="linkedin" />
				<ContactLink type="mail" />
				<ContactLink type="phone" />
				<ContactLink type="github" />
			</section>
			<section className="contact__form">
				<ContactForm/>
			</section>

		</main>
	)
}

export default Contact;