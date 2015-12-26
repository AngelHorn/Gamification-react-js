import * as actionTypes from '../actions/actionTypes.jsx';

let navType = navTypeMapping(window.location.hash.replace('#/','').split("?")[0]);
let defaultState = {
    roleInfo:{
      dayIncome: 0,
      balance: 0,
      level: 1,
      exp: 0
    },
    navType
}

function bag_items(state = defaultState, action) {
  let newState;
  switch (action.type) {
      case actionTypes.PUT_CURRENT_NAV_TYPE:
          let navType = navTypeMapping(window.location.hash.replace('#/','').split("?")[0]);
          return Object.assign({}, state, {navType})
      default:
      return state;
  }
}

/*****lib*****/
function navTypeMapping(navType){
  let newState
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
      case "schedule":
          newState = 4
          break;
      case "done":
          newState = 5
          break
      case "trash":
          newState = 6;
          break;
      case "chart":
          newState = 11;
          break;
      case "today":
      default:
          newState = 1
  }
  return newState
}

export default bag_items;
