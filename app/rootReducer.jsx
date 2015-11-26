import {combineReducers} from 'redux';

import quests from './reducers/quests.jsx';

export const reducers = {
    quests
};

let rootReducer = combineReducers(reducers);

export default rootReducer;
