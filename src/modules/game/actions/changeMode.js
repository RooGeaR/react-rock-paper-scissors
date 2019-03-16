import { MODEKEYS } from '../constants'
import * as selectors from '../selectors';
import setMode from './setMode';
import reset from './reset';
import setWaitingNewChallenger from './setWaitingNewChallenger';

/**
 * Change mode between player vs computer & computer vs computer 
 */
export default function changeMode() {
    return (dispatch, getState) => {

        const state = getState();
        const mode = selectors.getMode(state);

        dispatch(reset());
        let newMode = mode === MODEKEYS[0] ? MODEKEYS[1] 
                    : mode === MODEKEYS[1] ? MODEKEYS[2]
                    : MODEKEYS[0];

        if (newMode === MODEKEYS[2]) {
            dispatch(setWaitingNewChallenger(true))
        }

        dispatch(setMode(newMode));
    };
}