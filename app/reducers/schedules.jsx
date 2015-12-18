import * as actionTypes from '../actions/actionTypes.jsx';

function schedules(state = [], action) {
  let newState
  let scheduleIndex
  switch (action.type) {
    case actionTypes.RECEIVE_SCHEDULES:
      return action.schedules.reverse();
    case actionTypes.ADD_SCHEDULE:
      newSchedule;
      return state;
    default:
      return state;
  }
}

export default schedules;
