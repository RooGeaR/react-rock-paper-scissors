import { SET_MODE } from '../actionTypes';

export default function setMode(mode) {
    return {
        type: SET_MODE,
        payload: mode
    };
}
