import MobileNav from '../Components/MobileNav/MobileNav';
import { render } from '@testing-library/react';
import React from 'react';

describe('MobileNav component', () => {

	const isOpen = false;
    React.useState = jest.fn().mockReturnValue([isOpen, {}]);

	const setOpen = () => {
		React.useState = jest.fn().mockReturnValue([!isOpen, {}]);
	}

	const onToggle = (toggled:boolean) => {
		toggled ? toggled = true : toggled = false;
	}

	const handleOnClose = () => {
		React.useState = jest.fn().mockReturnValue([false, {}]);
	}

	
	
	
	test("should render without crash", () => {
		const HamburgerMenuComponent = () =>  render(<MobileNav isOpen={isOpen} 
				setOpen={setOpen}
				onToggle={onToggle}
				handleOnClose={handleOnClose}  />);
		expect(HamburgerMenuComponent).toBeDefined();	

	})
})

