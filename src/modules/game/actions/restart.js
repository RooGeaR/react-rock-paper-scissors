import { RESTART } from '../actionTypes';

/**
 * Reset the weapons and winner states
 */
export default function restart() {
    return {
        type: RESTART
    };
}
