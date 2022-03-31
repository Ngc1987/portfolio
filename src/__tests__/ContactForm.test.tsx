import ContactForm from '../Components/ContactForm/ContactForm';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('ContactForm component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <ContactForm/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<ContactForm/>);

		const form:HTMLFormElement = screen.getByTestId("form");
		expect(form).toBeInTheDocument();

		const inputs:HTMLInputElement[] = screen.getAllByTestId("formInput");   
		expect(inputs.length).toBe(5);
	})
})

