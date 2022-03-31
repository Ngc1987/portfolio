import Skill from '../Components/Skill/Skill';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Skill component', () => {

	const container:HTMLDivElement = document.createElement('div');
	
	test("should render without crash", () => {
  			ReactDOM.render(
                <Skill name="html"/>
			  , container);
	})
    test('should show html skill its content on the page',  () => {
        render(<Skill name="html"/>);

		const skillHtml:HTMLDivElement = screen.getByTestId("skillHtml");
		expect(skillHtml).toBeInTheDocument();
	})
})