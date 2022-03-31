import WorkSample from '../Components/WorkSample/WorkSample';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { WorkSampleProps } from '../Datas/WorkSampleDatas';

describe('WorkSample component', () => {

	const container:HTMLDivElement = document.createElement('div');

	const workSampleMockedData:WorkSampleProps = {
		"title": "Portfolio",
		"image": `${process.env.PUBLIC_URL}/assets/portfolio.webp`,
		"description": "This is my portfolio. You are already on this, but if you like infinite loops like a bugged code, click on it !",
		"githubLink": "https://github.com/Ngc1987/portfolio",
		"liveDemoLink": "https://thomasemeriaportfolio.netlify.app/",
	}
	
	test("should render without crash", () => {
  			ReactDOM.render(
                <WorkSample title={workSampleMockedData.title}
							image={workSampleMockedData.image}
							description={workSampleMockedData.description}
							githubLink={workSampleMockedData.githubLink}
							liveDemoLink={workSampleMockedData.liveDemoLink}
							 />
			  , container);
	})
    test('should show html skill its content on the page',  () => {
        render(<WorkSample title={workSampleMockedData.title}
						image={workSampleMockedData.image} 
						description={workSampleMockedData.description} 
						githubLink={workSampleMockedData.githubLink} 
						liveDemoLink={workSampleMockedData.liveDemoLink} 
						 />);

		const workSample:HTMLDivElement = screen.getByTestId("workSample");
		expect(workSample).toBeInTheDocument();
	})
})