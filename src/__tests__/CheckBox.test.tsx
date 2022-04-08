import {CheckBox} from '../Components/CheckBox/CheckBox';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from "react";

describe('CheckBox component', () => {

	const container:HTMLDivElement = document.createElement('div');
	
	const myInitialState = false;
    React.useState = jest.fn().mockReturnValue([myInitialState, {}]);

	const changeState = () => {
		React.useState = jest.fn().mockReturnValue([!myInitialState, {}]);
	}

	test("should render without crash", () => {
		
  			ReactDOM.render(
                <CheckBox inAlien={myInitialState} changeTextLanguage={changeState} />
			  , container);
	})
    test('should show its content on the page',  () => {
		
        render(<CheckBox inAlien={myInitialState} changeTextLanguage={changeState} />);

		const checkBox:HTMLLabelElement = screen.getByTestId("checkbox");
		expect(checkBox).toBeInTheDocument();
		
	})
})

