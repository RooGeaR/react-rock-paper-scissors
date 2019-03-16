import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game, { getRandomWeapon, getWinner } from './Game';

Enzyme.configure({ adapter: new Adapter() })

const props = {
    mode: 'pve',
    player1: {
        loading: false,
        weapon: null,
        score: 0,
    },
    player2: {
        loading: false,
        weapon: null,
        score: 0,
    },
    winner: null,
    waitingNewChallenger: false,
    isConnected: false,
    isComplete: false,
    isPlaying: false,
    changeMode: jest.fn(),
    restart: jest.fn(),
    setPlayerOne: jest.fn(),
    setPlayerTwo: jest.fn(),
    setScoreWinner: jest.fn(),
    reset: jest.fn(),
    setTimestamp: jest.fn(),
    setCurrentPlayer: jest.fn(),
    setLoadingPlayerOne: jest.fn(),
    setIsPlaying: jest.fn(),

}

describe('Game', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game { ...props }/>);
    });

	it('should return randowm weapon', () => {
		const weapons = ['rock', 'paper', 'scissors'];
		let weaponFound = [];
		let valid = false;

		// Loop multiple times and expect to show up al least once.
		for (let i = 0, end = 20; i < end; i++) {
			const weapon = getRandomWeapon();
			if (weapons.indexOf(weapon) > -1 && weaponFound.indexOf(weapon) === -1) {
				weaponFound.push(weapon);
			}

			if (weaponFound.length === weapons.length) {
				valid = true;
				i = end;
			}
		}

		expect(valid).toBe(true);
	})

	it('should determine winner', () => {
		let winner = getWinner('paper', 'rock');
		expect(winner).toBe(1);
		winner = getWinner('rock', 'paper');
		expect(winner).toBe(2);
		winner = getWinner('rock', 'scissors');
		expect(winner).toBe(1);
		winner = getWinner('scissors', 'rock');
		expect(winner).toBe(2);
		winner = getWinner('scissors', 'paper');
		expect(winner).toBe(1);
		winner = getWinner('paper', 'scissors');
		expect(winner).toBe(2);
	})

	it('should render weapon list', () => {
        expect(wrapper.find('WeaponList').length).toBe(1);
        wrapper.setProps({ winner: 1 });
        expect(wrapper.find('WeaponList').length).toBe(0);
        wrapper.setProps({ winner: null, mode: 'simulate' });
        expect(wrapper.find('WeaponList').length).toBe(0);
    })

    it('should render result', () => {
        wrapper.setProps({ winner: null, player1: { loading: false }, player2: { loading: false }, mode: 'pve' });
        expect(wrapper.find('Result').length).toBe(0);
        wrapper.setProps({ winner: 1 });
        expect(wrapper.find('Result').length).toBe(1);
        wrapper.setProps({ winner: null, player1: { loading: true } });
        expect(wrapper.find('Result').length).toBe(1);
        wrapper.setProps({ player1: { loading: false }, player2: { loading: true } });
		expect(wrapper.find('Result').length).toBe(1);
		wrapper.setProps({ player2: { loading: false }, mode: 'simulate' });
		expect(wrapper.find('Result').length).toBe(1);
    });
})