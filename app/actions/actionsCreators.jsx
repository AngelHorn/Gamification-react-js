import * as actionTypes from './actionTypes.jsx';

export function fuckClickAC(text = "fuck") {
  return {type: actionTypes.FUCK_CLICK, text}
}
