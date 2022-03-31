import Home from '../Pages/Home/Home';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Home Page component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <Home/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<Home/>);

		const homeDescription:HTMLParagraphElement = screen.getByText("In your planet, you can call me Thomas Semeria.");
		expect(homeDescription).toBeInTheDocument();

		const alien:HTMLElement = screen.getByTestId("flyingAlien");
		expect(alien).toBeInTheDocument();

		const helloWorld:HTMLElement = screen.getByText("Hello World !");
		expect(helloWorld).toBeInTheDocument();

		const earth:HTMLElement = screen.getByAltText("Earth draw");
		expect(earth).toBeInTheDocument();
		
	})
})

