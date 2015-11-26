import * as actionTypes from '../actions/actionTypes.jsx';

function quests(state = [], action) {
  switch (action.type) {
      case actionTypes.FUCK_CLICK:
        return state;
      case 'RECEIVE_POSTS':
       return action.data
    default:
      return state;
  }
}

export default quests;
