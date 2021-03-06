import {Loader} from '../Components/Loader/Loader';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Loader component', () => {

	const container:HTMLDivElement = document.createElement('div');
	
	test("should render without crash", () => {
  			ReactDOM.render(
                <Loader className="page__loader" />
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<Loader className="page__loader" />);

		const loader:HTMLDivElement = screen.getByTestId("loader");
		expect(loader).toBeInTheDocument();
	})
})

