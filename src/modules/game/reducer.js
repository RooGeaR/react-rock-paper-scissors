import Immutable from 'immutable';
import {
    SET_PLAYER_ONE, SET_PLAYER_TWO, SET_SCORE_WINNER, SET_MODE, RESTART,
    RESET, SET_TIMESTAMP, SET_WAITING_NEW_CHALLENGER,
    SET_CURRENT_PLAYER, SET_LOADING_PLAYER_ONE, SET_IS_PLAYING
} from './actionTypes';
import { MODEKEYS } from './constants';

const INITIAL_STATE = Immutable.fromJS({
    mode: MODEKEYS[0],
    current_id: null,
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
    timestamp: 'no timestamp yet',
    waiting_new_challenger: false,
    is_connected: false,
    is_complete: false,
    is_playing: true
});

export default function (state = INITIAL_STATE, action = { type: null }) {

    switch (action.type) {
        case SET_PLAYER_ONE:
            return state.setIn(['player1', 'weapon'], action.payload.weapon)
                .setIn(['player1', 'loading'], action.payload.loading);

        case SET_PLAYER_TWO:
            return state.setIn(['player2', 'weapon'], action.payload.weapon)
                .setIn(['player2', 'loading'], action.payload.loading)
                .set('is_complete', true);
        
        case SET_SCORE_WINNER:

            if (action.payload === 1) {
                state = state.updateIn(['player1', 'score'], (value) => value + 1);
            } else if (action.payload === 2) {
                state = state.updateIn(['player2', 'score'], (value) => value + 1);       
            }
            return state.setIn(['player1', 'loading'], false)
                .setIn(['player2', 'loading'], false)
                .set('winner', action.payload);

        case SET_MODE:
            return state.set('mode', action.payload)

        case RESTART:
            return state.setIn(['player1', 'weapon'], null)
                .setIn(['player2', 'weapon'], null)
                .set('winner', null)
                .set('is_complete', false)
                .set('is_playing', true);

        case RESET:
            return INITIAL_STATE;
        
        case SET_TIMESTAMP:
            return state.set('timestamp', action.payload)

        case SET_WAITING_NEW_CHALLENGER:
            return state.set('waiting_new_challenger', action.payload)
        
        case SET_CURRENT_PLAYER:
            return state.set('is_connected', true)
                .set('current_id', action.payload);
        
        case SET_IS_PLAYING:
            return state.set('is_playing', action.payload)
        
        case SET_LOADING_PLAYER_ONE:
            return state.setIn(['player1', 'loading'], action.payload);

        default:
            return state;
    }
}