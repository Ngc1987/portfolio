import FlyingAlien from '../Components/FlyingAlien/FlyingAlien';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('FlyingAlien component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <FlyingAlien/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(
			<FlyingAlien/>
		);

		const alienComponent:HTMLDivElement = screen.getByTestId("flyingAlien");
		expect(alienComponent).toBeInTheDocument();

		const alienPic:HTMLImageElement = screen.getByAltText("Alien in a flying saucer");
		expect(alienPic).toBeInTheDocument();
	})
})

