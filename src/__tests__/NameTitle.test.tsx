import NameTitle from '../Components/NameTitle/NameTitle';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('NameTitle component', () => {

	const container:HTMLDivElement = document.createElement('div');
	
	test("should render without crash", () => {
  			ReactDOM.render(
                <NameTitle className="title show"/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<NameTitle className="title show"/>);

		const nameTitle:HTMLDivElement = screen.getByTestId("nameTitle");
		expect(nameTitle).toBeInTheDocument();
	})
})