import {combineReducers} from 'redux';

import quests from './reducers/quests.jsx';
import current from './reducers/current.jsx';
import schedules from './reducers/schedules.jsx';
import items from './reducers/items.jsx';
import bag_items from './reducers/bag_items.jsx';

export const reducers = {
  bag_items,
  items,
  schedules,
  quests,
  current
};

let rootReducer = combineReducers(reducers);

export default rootReducer;
