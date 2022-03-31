import Contact from '../Pages/Contact/Contact';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Contact Page component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <Contact/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<Contact/>);

		const contactDescription:HTMLHeadingElement = screen.getByText("Here are the links through which you can follow or contact me.");
		expect(contactDescription).toBeInTheDocument();

		const contactLinks:HTMLDivElement[] = screen.getAllByTestId("contactLink");
		expect(contactLinks.length).toBe(4);

		const contactForm:HTMLFormElement = screen.getByTestId("form");
		expect(contactForm).toBeInTheDocument();
		
	})
})

