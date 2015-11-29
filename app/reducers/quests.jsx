import * as actionTypes from '../actions/actionTypes.jsx';

function quests(state = [], action) {
  switch (action.type) {
       case actionTypes.RECEIVE_QUESTS:
         return action.quests
       case actionTypes.COMPLETE_QUEST:
         let newState = state.concat();
         let questIndex = newState.findIndex((quest) => quest.id === action.id);
         newState[questIndex].state = 1;
         return newState;
    default:
      return state;
  }
}

export default quests;
