import HamburgerButton from '../Components/HamburgerButton/HamburgerButton';
import { render } from '@testing-library/react';
import React from 'react';

describe('HamburgerButton component', () => {

	const isOpen = false;
    React.useState = jest.fn().mockReturnValue([isOpen, {}]);

	const setOpen = () => {
		React.useState = jest.fn().mockReturnValue([!isOpen, {}]);
	}

	const onToggle = (toggled:boolean) => {
		toggled ? toggled = true : toggled = false;
	}
	
	test("should render without crash", () => {
		const HamburgerMenuComponent = () =>  render(<HamburgerButton toggled={isOpen} 
				toggle={setOpen}
				onToggle={onToggle}  />);
		expect(HamburgerMenuComponent).toBeDefined();	
	})
})

