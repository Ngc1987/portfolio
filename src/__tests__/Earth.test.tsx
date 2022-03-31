import Earth from '../Components/Earth/Earth';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Earth component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <Earth/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(
			<Earth/>
		);

		const earth:HTMLImageElement = screen.getByAltText("Earth draw");
		expect(earth).toBeInTheDocument();
	})
})

