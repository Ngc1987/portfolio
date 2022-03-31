import MyWork from '../Pages/MyWork/MyWork';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('MyWork Page component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <MyWork/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<MyWork/>);

		const myWorkDescription:HTMLHeadingElement = screen.getByText("Here is some of my work.");
		expect(myWorkDescription).toBeInTheDocument();

		const workSamples:HTMLElement[] = screen.getAllByTestId("workSample");
		expect(workSamples.length).toBe(5);
		
	})
})

