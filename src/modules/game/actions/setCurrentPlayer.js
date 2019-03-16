import { SET_CURRENT_PLAYER } from '../actionTypes';

export default function setCurrentPlayer(id) {
    return {
        type: SET_CURRENT_PLAYER,
        payload: id
    };
}
