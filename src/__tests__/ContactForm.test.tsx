import ContactForm from '../Components/ContactForm/ContactForm';
import Contact from '../Pages/Contact/Contact';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('ContactForm component', () => {

	test("should render without crash", () => {
		const div = document.createElement('div');
  			ReactDOM.render(
                <ContactForm/>
			  , div);
	})
    test('should show its content on the page',  () => {
        render(
				<ContactForm/>
				
        );
		// Check if the children props, who is the value displayed for the label, appears on the page
		const form = screen.getByTestId("form");
		expect(form).toBeInTheDocument();
    })
})