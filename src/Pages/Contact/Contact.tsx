import React, { ReactElement } from "react";
import "./Contact.scss";

import ContactLink from "../../Components/ContactLink/ContactLink";
import ContactForm from "../../Components/ContactForm/ContactForm";


export type ContactProps = {
	translate: (key: string) => void;
}

/**
 * Renders the Contact page
 * 
 * @component
 * 
 * ```tsx
 * <Route path="/about" element={
 *		<React.Suspense fallback={<Loader className="page__loader" />}>
 *				<Contact/>
 *		</React.Suspense>
 *	}/>
 * ```
 * 
 * @category Pages
 */
export function Contact({translate}:ContactProps):ReactElement {

	return (
		<main className="contact" >
			<section className="contact__description">
				<h1 tabIndex={0}>
					{translate("contactH1")} </h1>
				<br />
				<p tabIndex={0}>{translate("contactText1")} </p>
			</section>
			<section className="contact__links">
				<ContactLink type="linkedin" />
				<ContactLink type="mail" />
				<ContactLink type="phone" />
				<ContactLink type="github" />
			</section>
			<section className="contact__form">
				<ContactForm translate={translate} />
			</section>

		</main>
	)
}

export default Contact;