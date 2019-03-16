import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modes from './Modes';

Enzyme.configure({adapter: new Adapter()})

function setup() {
	const props = {
		label: 'PLAYER VS COMPUTER',
		onClickMode: jest.fn()
	}

	const enzymeWrapper = shallow(<Modes {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('components', () =>{
	describe('Modes', () => {
		it('should render change mode button', () => {
			const { enzymeWrapper } = setup();

			expect(enzymeWrapper.find('span').text()).toBe('PLAYER VS COMPUTER')
			expect(enzymeWrapper.find('Button').length).toBe(1);
		})
	})
})
