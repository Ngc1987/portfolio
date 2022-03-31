import CV from '../Pages/CV/CV';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('CV Page component', () => {

	const container:HTMLDivElement = document.createElement('div');
	test("should render without crash", () => {
  			ReactDOM.render(
                <CV/>
			  , container);
	})
    test('should show its content on the page',  () => {
        render(<CV/>);

		const cvDescription:HTMLHeadingElement = screen.getByText("On this page you can read or download my curriculum vitae.");
		expect(cvDescription).toBeInTheDocument();

		const checkBox:HTMLLabelElement = screen.getByTestId("checkbox");
		expect(checkBox).toBeInTheDocument();
		
		const cvContent:HTMLParagraphElement = screen.getByText("Earth language");
		expect(cvContent).toBeInTheDocument();
		
		const profilePic:HTMLImageElement = screen.getByAltText("Profile pic of Thomas");
		expect(profilePic).toBeInTheDocument();
		
		const skills:HTMLDivElement[] = screen.getAllByTestId("skill");
		expect(skills.length).toBe(14);
		
		const skillsText:HTMLDivElement = screen.getByTestId("skillsText");
		expect(skillsText).toBeInTheDocument();
		
		const cvExperiencesTitle:HTMLHeadingElement = screen.getByText("Experiences");
		expect(cvExperiencesTitle).toBeInTheDocument();
		
		const experiences:HTMLElement[] = screen.getAllByTestId("experience");
		expect(experiences.length).toBe(9);
		
		const cvExperiencesText:HTMLParagraphElement = screen.getByText("If you want you can see my olders experiences by clicking the below arrow, not from the dev world but it's experiences:");
		expect(cvExperiencesText).toBeInTheDocument();
		
		const downloadCvButton:HTMLDivElement = screen.getByTestId("downloadButton");
		expect(downloadCvButton).toBeInTheDocument();
	})
})
