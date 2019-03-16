import { SET_TIMESTAMP } from '../actionTypes';

export default function setTimestamp(timestamp) {
    return {
        type: SET_TIMESTAMP,
        payload: timestamp
    };
}
