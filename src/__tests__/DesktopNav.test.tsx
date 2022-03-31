import DesktopNav from '../Components/DesktopNav/DesktopNav';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('DesktopNav component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
				<BrowserRouter>
                	<DesktopNav/>
				</BrowserRouter>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(
			<BrowserRouter>
				<DesktopNav/>
			</BrowserRouter>
		);

		const desktopNav:HTMLDivElement = screen.getByTestId("desktopNav");
		expect(desktopNav).toBeInTheDocument();

		const links: HTMLAnchorElement[] = screen.getAllByTestId("desktopNavLink");   
		expect(links.length).toBe(5);
	})
})

