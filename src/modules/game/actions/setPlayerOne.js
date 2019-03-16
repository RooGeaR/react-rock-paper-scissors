import { SET_PLAYER_ONE, } from '../actionTypes';

export default function setPlayerOne(weapon, loading) {
    return {
        type: SET_PLAYER_ONE,
        payload: {
            weapon,
            loading
        }
    };
}
