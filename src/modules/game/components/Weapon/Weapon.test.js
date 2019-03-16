import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Weapon from './Weapon'; 

Enzyme.configure({adapter: new Adapter()})

function setup() {
	const props = {
		icon: 'rock'
	}

	const enzymeWrapper = shallow(<Weapon {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('components', () =>{
	describe('Weapon', () => {
		it('should render weapon (rock, paper or scissors)', () => {
			const { enzymeWrapper } = setup();

			expect(enzymeWrapper.find('span').hasClass('fa-hand-rock-o')).toBe(true);
		})
	})
})
