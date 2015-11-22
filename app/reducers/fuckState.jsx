import * as actionTypes from '../actions/actionTypes.jsx';

function fuckState(state = 'fuck', action) {
  switch (action.type) {
      case actionTypes.FUCK_CLICK:
      switch (action.text) {
        case "fuck":
          return "shit";
          break;
        default:
          return "fuck";
      }
    default:
      return state;
  }
}

export default fuckState;
