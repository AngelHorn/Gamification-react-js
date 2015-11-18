import * as actionTypes from '../actions/actionTypes.jsx';

function fuckState(state = 'fuck', action) {
  switch (action.type) {
      case actionTypes.FUCK_CLICK:
      if (action.text === "fuck") {return "shit";} else {return "fuck";}
    default:
      return state;
  }
}

export default fuckState;
