import { SET_SCORE_WINNER } from '../actionTypes';

export default function setScoreWinner(winner) {
    return {
        type: SET_SCORE_WINNER,
        payload: winner
    };
}
