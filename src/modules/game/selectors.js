import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = (state) => {
    return state.get(NAME);
};

export const getTimestamp = createSelector(
    getModel,
    (model) => model.get('timestamp')
);

export const getWaitingNewChallenger = createSelector(
    getModel,
    (model) => model.get('waiting_new_challenger')
);

export const getIsPlaying = createSelector(
    getModel,
    (model) => model.get('is_playing')
);

export const getIsComplete = createSelector(
    getModel,
    (model) => model.get('is_complete')
);

export const getIsConnected = createSelector(
    getModel,
    (model) => model.get('is_connected')
);

export const getCurrentId = createSelector(
    getModel,
    (model) => model.get('current_id')
);

export const getPlayerOne = createSelector(
    getModel,
    (model) => model.get('player1')
);

export const getPlayerOneInfo = createSelector(
    getPlayerOne,
    (player) => ({
        loading: player.get('loading'),
        weapon: player.get('weapon'),
        score: player.get('score')
    })
);

export const getPlayerTwo = createSelector(
    getModel,
    (model) => model.get('player2')
);

export const getPlayerTwoInfo = createSelector(
    getPlayerTwo,
    (player) => ({
        loading: player.get('loading'),
        weapon: player.get('weapon'),
        score: player.get('score')
    })
);

export const getWinner = createSelector(
    getModel,
    (model) => model.get('winner')
);

export const getMode = createSelector(
    getModel,
    (model) => model.get('mode')
);

