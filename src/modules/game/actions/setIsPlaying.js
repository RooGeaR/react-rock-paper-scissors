import { SET_IS_PLAYING } from '../actionTypes';

export default function setIsPlaying(playing) {
    return {
        type: SET_IS_PLAYING,
        payload: playing
    };
}
