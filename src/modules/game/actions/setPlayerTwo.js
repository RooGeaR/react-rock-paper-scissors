import { SET_PLAYER_TWO } from '../actionTypes';

export default function setPlayerTwo(weapon, loading) {
    return {
        type: SET_PLAYER_TWO,
        payload: {
            weapon,
            loading
        }
    };
}