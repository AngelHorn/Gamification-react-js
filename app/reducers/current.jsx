import * as actionTypes from '../actions/actionTypes.jsx';

let navType = window.location.hash.replace('#/','').split("?")[0]
let newState;
switch (navType) {
    case "inbox":
        newState = 0
        break;
    case "next":
        newState = 2
        break;
    case "waiting":
        newState = 3
        break;
    case "done":
        newState = 5
        break
    case "today":
    default:
        newState = 1
}
let defaultState = {
    navType: newState
}

function current(state = defaultState, action) {
  let newState;
  switch (action.type) {
      case actionTypes.PUT_CURRENT_NAV_TYPE:
          let navType = window.location.hash.replace('#/','').split("?")[0]
          switch (navType) {
              case "inbox":
                  newState = 0
                  break;
              case "next":
                  newState = 2
                  break;
              case "waiting":
                  newState = 3
                  break;
              case "done":
                  newState = 5
                  break
              case "today":
              default:
                  newState = 1
          }
          return Object.assign({}, state, {navType: newState})
    default:
      return state;
  }
}

export default current;
