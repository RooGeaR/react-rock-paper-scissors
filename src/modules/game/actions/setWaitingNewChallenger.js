import { SET_WAITING_NEW_CHALLENGER, } from '../actionTypes';

export default function waitingNewChallenger(waiting) {
    return {
        type: SET_WAITING_NEW_CHALLENGER,
        payload: waiting
    };
}
