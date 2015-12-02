import {combineReducers} from 'redux';

import quests from './reducers/quests.jsx';
import current from './reducers/current.jsx';

export const reducers = {
    quests,
    current
};

let rootReducer = combineReducers(reducers);

export default rootReducer;
