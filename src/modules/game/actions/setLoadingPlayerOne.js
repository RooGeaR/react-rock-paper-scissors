import { SET_LOADING_PLAYER_ONE } from '../actionTypes';

export default function setLoadingPlayerOne(loading) {
    return {
        type: SET_LOADING_PLAYER_ONE,
        payload: loading
    };
}
