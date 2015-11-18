import * as actionTypes from './actionTypes.jsx';

export function fuckClickAC(text = "fuck1") {
  return {type: actionTypes.FUCK_CLICK, text}
}
