import * as actionTypes from '../actions/actionTypes.jsx';

function quests(state = [], action) {
  let newState, questIndex;
  switch (action.type) {
       case actionTypes.RECEIVE_QUESTS:
         return action.quests
       case actionTypes.COMPLETE_QUEST:
         newState = state.concat();
         questIndex = newState.findIndex((quest) => quest.id === action.id);
         newState[questIndex].state = 1;
         return newState;
         break;
     case actionTypes.CANCEL_COMPLETE_QUEST:
       newState = state.concat();
       questIndex = newState.findIndex((quest) => quest.id === action.id);
       newState[questIndex].state = 0;
       return newState;
       break;
       case actionTypes.ADD_QUEST:
         newState = state.concat();
         newState.push(action.newQuest);
         return newState;
         break;
    default:
      return state;
  }
}

export default quests;
