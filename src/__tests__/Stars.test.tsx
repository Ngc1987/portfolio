import Stars from '../Components/Stars/Stars';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Stars component', () => {

	const container:HTMLDivElement = document.createElement('div');
	
	test("should render without crash", () => {
  			ReactDOM.render(
                <Stars/>
			  , container);
	})
    test('should show html skill its content on the page',  () => {
        render(<Stars/>);

		const stars:HTMLDivElement = screen.getByTestId("stars");
		expect(stars).toBeInTheDocument();
	})
})