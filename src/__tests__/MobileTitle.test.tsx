import MobileTitle from '../Components/MobileTitle/MobileTitle';
import Home from '../Pages/Home/Home';
// import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from 'enzyme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

describe('MobileTitle component', () => {

	const container:HTMLDivElement = document.createElement('div');

	Enzyme.configure({ adapter: new Adapter() })
	
	
	test("should render without crash", () => {
  			ReactDOM.render(
                <BrowserRouter>
					<Routes>
						<Route path="/" element={<Home><MobileTitle /></Home>} />
					</Routes>
				</BrowserRouter>
			  , container);
	})
    
	it("Should render MobileTitle in small screen", () => {
		jest.spyOn(window.screen, "width", "get").mockReturnValue(500);
		const wrapper = mount(<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home><MobileTitle /></Home>} />
					</Routes>
				</BrowserRouter>);
				
		expect(wrapper.find("Home").exists()).toBe(true);
	});

})

