import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Immutable from 'immutable';
import Container from './Container';
import { getWinner } from './components/Game/Game';
import { NAME, MODEKEYS } from './constants';
import { SET_MODE, SET_PLAYER_ONE, SET_PLAYER_TWO, SET_SCORE_WINNER } from './actionTypes';
import actions from './actions';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() })

describe('Container', () => {

    // create any initial state needed
    const initialState = Immutable.fromJS({
        [NAME] : {
            mode: MODEKEYS[0],
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
            isPlaying: false
        }
    });

    const middlewares = [thunk];

    // here it is possible to pass in any middleware if needed into //configureStore
    const mockStore = configureStore(middlewares);
    
    let wrapper;
    let store;

    const renderWrapper = (state) => {
        store = mockStore(state);
        wrapper = mount(<Provider store={store}><Container /></Provider>);
    };

      
    beforeEach(() => {
        renderWrapper(initialState);
    })

    it('should run a new play round in pve mode', () => {
        const weapon = 'rock'; 

        wrapper.find('Container').children().instance().play(weapon);
        const expectedPayloadTypes = [SET_PLAYER_TWO, SET_PLAYER_ONE];
        let storeActions = store.getActions();
        let types = storeActions.map(action => action.type);
        expect(types).toEqual(expectedPayloadTypes);

        // Player2
        expect(storeActions[0].payload.loading).toBe(false);
        expect(storeActions[0].payload.weapon).toBe(weapon);
        
        // Player1
		expect(storeActions[1].payload.loading).toBe(true);
		expect(storeActions[1].payload.weapon).not.toBe(null);

    });

    it('should run a new play round in simulate mode', () => {
        
        store.dispatch(actions.setMode('simulate'));
        let storeActions = store.getActions();

        // Get the setMode actions response
        expect(storeActions[0]).toEqual({ type: SET_MODE, payload: 'simulate'});
        let changeInit = initialState.setIn([NAME, 'mode'], 'simulate');

        // Change state with new mode
        renderWrapper(changeInit);
        wrapper.find('Container').children().instance().play();
        storeActions = store.getActions();

        // Player2
        expect(storeActions[0].payload.loading).toBe(true);
        expect(storeActions[0].payload.weapon).not.toBe(null);
        
        // Player1
		expect(storeActions[1].payload.loading).toBe(true);
		expect(storeActions[1].payload.weapon).not.toBe(null);
    });
    
    it('should set result', () => {

        let changeInit;
         
		const test = (weapon1, weapon2) => {
            changeInit = initialState.setIn([NAME, 'player1', 'loading'], true)
                    .setIn([NAME, 'player1', 'weapon'], weapon1)
                    .setIn([NAME, 'player2', 'loading'], true)
                    .setIn([NAME, 'player2', 'weapon'], weapon2);
            // Change state
            renderWrapper(changeInit);
			wrapper.find('Container').children().instance().setResult();
            let storeActions = store.getActions();
            const winner = getWinner(weapon1, weapon2);
            const expectedPayload = { type: SET_SCORE_WINNER, payload: winner};
            expect(storeActions[0]).toEqual(expectedPayload);
		};
		test('rock', 'paper');
		test('rock', 'rock');
	});
})