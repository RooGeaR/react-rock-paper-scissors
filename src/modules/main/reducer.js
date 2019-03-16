//import routerReducer from '../../routing/reducer';
import { combineReducers } from 'redux-immutable';
import game from '../game';
import { connectRouter } from 'connected-react-router/immutable';

export default (history) => combineReducers({
    router: connectRouter(history),
    [game.NAME] : game.reducer
})