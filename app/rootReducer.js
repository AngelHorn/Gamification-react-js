import {combineReducers} from 'redux';
import { routerStateReducer } from 'redux-router';

import fuckState from './reducers/fuckState';

export const reducers = { fuckState, router: routerStateReducer };

let rootReducer = combineReducers(reducers);

export default rootReducer;
