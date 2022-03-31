import Experience from '../Components/Experience/Experience';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

describe('Experience component', () => {

	const container:HTMLDivElement = document.createElement('div');

	const job = {
		employer: "Myself",
		job: "front-end developer",
		dates: "01/2022 to actually",
		index: 1,
		showExp: true
	}

	test("should render without crash", () => {
  			ReactDOM.render(
                <Experience employer={job.employer}
							job={job.job}
							dates={job.dates}
							index={job.index}
							showExp={job.showExp} />
			  , container);
	})
    test('should show its content on the page',  () => {
        render(
			<Experience employer={job.employer}
						job={job.job}
						dates={job.dates}
						index={job.index}
						showExp={job.showExp} />
		);

		const myselfJob:HTMLDivElement = screen.getByTestId("myselfJob");
		expect(myselfJob).toBeInTheDocument();

		const jobTitle:HTMLDivElement = screen.getByText("front-end developer");
		expect(jobTitle).toBeInTheDocument();
	})
})

