import setMode from './setMode';
import { SET_MODE } from '../actionTypes';


describe('actions', () => {
    it('Should set the mode of the game', () => {
        const mode = 'simulate';
        const expectedAction = {
            type: SET_MODE,
            payload: mode
        }
        expect(setMode(mode)).toEqual(expectedAction)
    })
})