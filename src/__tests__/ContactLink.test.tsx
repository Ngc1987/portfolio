import ContactLink from '../Components/ContactLink/ContactLink';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { IconType } from 'react-icons';

describe('ContactLink component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <ContactLink type="linkedin" />
			  , container);
	})
    test('should show linkedin link on the page',  () => {
        render(<ContactLink type="linkedin" />);

		const contactLink:HTMLDivElement = screen.getByTestId("contactLink");
		expect(contactLink).toBeInTheDocument();
		
		const linkedinLink:HTMLAnchorElement = screen.getByTestId("linkedin");
		expect(linkedinLink).toBeInTheDocument();
	})
    test('should show github link on the page',  () => {
        render(<ContactLink type="github" />);

		const contactLink:HTMLDivElement = screen.getByTestId("github");
		expect(contactLink).toBeInTheDocument();
		
		const githubLink:HTMLAnchorElement = screen.getByTestId("github");
		expect(githubLink).toBeInTheDocument();
	})
    test('should show mail link on the page',  () => {
        render(<ContactLink type="mail" />);

		const contactLink:HTMLDivElement = screen.getByTestId("mail");
		expect(contactLink).toBeInTheDocument();
		
		const mailLink:HTMLAnchorElement = screen.getByTestId("mail");
		expect(mailLink).toBeInTheDocument();
	})
    test('should show phone link on the page',  () => {
        render(<ContactLink type="phone" />);

		const contactLink:HTMLDivElement = screen.getByTestId("phone");
		expect(contactLink).toBeInTheDocument();
		
		const phoneLink:HTMLAnchorElement = screen.getByTestId("phone");
		expect(phoneLink).toBeInTheDocument();
	})
})

