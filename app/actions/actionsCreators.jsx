import request from 'superagent';
import { normalize, Schema, arrayOf } from 'normalizr';

import * as constants from './constants.jsx';
import * as actionTypes from './actionTypes.jsx';

export function putCurrentNavType(){
    return {
        type: actionTypes.PUT_CURRENT_NAV_TYPE
    }
}

export function fetchItems(){
  return dispatch => {
    //dispatch(requestPosts())
    return request
    .get(constants.SERVER + 'items')
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let items = res.body.data;
        dispatch({type: actionTypes.RECEIVE_ITEMS, items})
      });
    });
  }
}

export function fetchAddItem(item) {
  return (dispatch) => {
    return request
    .post('constants.SERVERitems')
    .type('form')
    .send(item)
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newItem = res.body.data;
        dispatch({ type:actionTypes.ADD_ITEM, newItem })
      });
    });
  }
}

export function fetchBagItems(){
  return dispatch => {
    //dispatch(requestPosts())
    return request
    .get(constants.SERVER + 'bag_items')
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let bag_items = res.body.data;
        dispatch({type: actionTypes.RECEIVE_BAG_ITEMS, bag_items})
      });
    });
  }
}

export function fetchAddBagItem(id) {
  return (dispatch) => {
    return request
    .post(constants.SERVER + 'bag_items')
    .type('form')
    .send({ id })
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newBagItem = res.body.data;
        dispatch({ type: actionTypes.ADD_BAG_ITEM, newBagItem })
      });
    });
  }
}

export function addQuest(newQuest) {
  return {
      type: actionTypes.ADD_QUEST,
      newQuest
  }
}

export function cancelCompleteQuest(id) {
  return (dispatch) => {
    return request
    .put(constants.SERVER + 'quests/'+id)
    .type('form')
    .send({ state: 0})
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newQuest = res.body.data;
        dispatch({type: actionTypes.CANCEL_COMPLETE_QUEST,newQuest})
      });
    });
  }
}

export function completeQuest(id) {
  return (dispatch) => {
    return request
    .put(constants.SERVER + 'quests/'+id)
    .type('form')
    .send({ state: 1})
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newQuest = res.body.data;
        dispatch({type: actionTypes.COMPLETE_QUEST,newQuest})
      });
    });
  }
}

function requestQuests() {
  return {
    type: actionTypes.REQUEST_QUESTS
  }
}

function receiveQuests(quests) {
  return {
    type: actionTypes.RECEIVE_QUESTS,
    quests: quests
  }
}

export function fetchQuests() {
  return dispatch => {
    //dispatch(requestPosts())
    return request
    .get(constants.SERVER + 'quests/tree')
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        // let shit = normalize(fuck, {data: arrayOf(new Schema('data'))})
        // let data = normalize(fuck, arrayOf(new Schema('data')))
        let quests = res.body.data;
        dispatch(receiveQuests(quests))
      });
    });
  }
}

export function fetchAddQuest(text, type, options = {}) {
  return (dispatch) => {
    return request
    .post(constants.SERVER + 'quests')
    .type('form')
    .send({ text, type, ...options })
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newQuest = res.body.data;
        dispatch(addQuest(newQuest))
      });
    });
  }
}

export function fetchEditQuest(quest) {
  return (dispatch) => {
    return request
    .put(constants.SERVER + 'quests/' + quest.id)
    .type('form')
    .send(quest)
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newQuest = res.body.data;
        dispatch({type: actionTypes.EDIT_QUEST, newQuest})
      });
    });
  }
}

export function fetchDeleteQuest(quest) {
  return (dispatch) => {
    return request
    .del(constants.SERVER + 'quests/' + quest.id)
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newQuest = res.body.data;
        dispatch({type: actionTypes.DELETE_QUEST, newQuest})
      });
    });
  }
}

export function fetchSchedules() {
  return dispatch => {
    //dispatch(requestPosts())
    return request
    .get(constants.SERVER + 'schedules')
    .end(function(err, res){
        // let shit = normalize(fuck, {data: arrayOf(new Schema('data'))})
        // let data = normalize(fuck, arrayOf(new Schema('data')))
        requestCodeHandler(res.body.code, () => {
          let schedules = res.body.data;
          dispatch({type: actionTypes.RECEIVE_SCHEDULES, schedules})
        });
    });
  }
}

export function fetchAddSchedule(formData) {
  return (dispatch) => {
    return request
    .post(constants.SERVER + 'schedules')
    .type('form')
    .send(formData)
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newSchedule = res.body.data;
        dispatch({
            type: actionTypes.ADD_SCHEDULE,
            newSchedule
        })
      });
    });
  }
}

export function fetchEditSchedule(formData) {
  return (dispatch) => {
    return request
    .put(constants.SERVER + 'schedules/' + formData.id)
    .type('form')
    .send(formData)
    .end(function(err, res){
      requestCodeHandler(res.body.code, () => {
        let newSchedule = res.body.data;
        dispatch({
            type: actionTypes.EDIT_SCHEDULE,
            newSchedule
        })
      });
    });
  }
}

/***** 以下为通用函数库 *****/
function requestCodeHandler(code, callback){
  switch (code) {
    case 200:
      callback();
      break;
    case 413:
      alert("系统检测到您的登录状态已经跨日！将为您刷新浏览器以获取新数据");
      window.location.reload();
      break;
    default:
      alert("未知的错误码:" + code);
  }
}
