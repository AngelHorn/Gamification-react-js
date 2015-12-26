import {combineReducers} from 'redux';

import quests from './reducers/quests.jsx';
import current from './reducers/current.jsx';
import schedules from './reducers/schedules.jsx';
import items from './reducers/items.jsx';

export const reducers = {
  items,
  schedules,
  quests,
  current
};

let rootReducer = combineReducers(reducers);

export default rootReducer;
