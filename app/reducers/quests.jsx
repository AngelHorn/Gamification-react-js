import * as actionTypes from '../actions/actionTypes.jsx';

function quests(state = [], action) {
  let newState;
  switch (action.type) {
       case actionTypes.RECEIVE_QUESTS:
         return action.quests
       case actionTypes.COMPLETE_QUEST:
         newState = state.concat();
         let questIndex = newState.findIndex((quest) => quest.id === action.id);
         newState[questIndex].state = 1;
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
