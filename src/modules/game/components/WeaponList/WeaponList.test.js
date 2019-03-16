import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeaponList from './WeaponList';
import { WEAPONKEYS } from '../../constants';

Enzyme.configure({adapter: new Adapter()})

function setup() {
	const props = {
		weapons: WEAPONKEYS,
		onClickWeapon: jest.fn()
	}

	const enzymeWrapper = shallow(<WeaponList {...props} />)

	return {
		props,
		enzymeWrapper
	}
}

describe('components', () =>{
	describe('WeaponList', () => {
		it('should render list of weapons', () => {
			const { enzymeWrapper, props } = setup();

			expect(enzymeWrapper.find('Weapon').length).toBe(props.weapons.length);
		})
	})
})
