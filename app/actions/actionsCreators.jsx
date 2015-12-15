import request from 'superagent';
import { normalize, Schema, arrayOf } from 'normalizr';

import * as actionTypes from './actionTypes.jsx';

export function putCurrentNavType(){
    return {
        type: actionTypes.PUT_CURRENT_NAV_TYPE
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
    .put('http://gamification.0x00000000.me/quests/'+id)
    .type('form')
    .send({ state: 0})
    .end(function(err, res){
        if(res.body.code == 200){
            let newQuest = res.body.data;
            dispatch({type: actionTypes.CANCEL_COMPLETE_QUEST,id})
        }else{
          alert("ERROR: CODE" + res.body.code);
        }
    });
  }
}

export function completeQuest(id) {
  return (dispatch) => {
    return request
    .put('http://gamification.0x00000000.me/quests/'+id)
    .type('form')
    .send({ state: 1})
    .end(function(err, res){
        if(res.body.code == 200){
          let newQuest = res.body.data;
          dispatch({type: actionTypes.COMPLETE_QUEST,id})
        }else{
          alert("ERROR: CODE" + res.body.code);
        }
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
    .get('http://gamification.0x00000000.me/quests/tree')
    .end(function(err, res){
        // let shit = normalize(fuck, {data: arrayOf(new Schema('data'))})
        // let data = normalize(fuck, arrayOf(new Schema('data')))
        if(res.body.code == 200){
          let quests = res.body.data;
          dispatch(receiveQuests(quests))
        }else{
          alert("ERROR: CODE" + res.body.code);
        }
    });
  }
}

export function fetchAddQuest(text, type, options = {}) {
  return (dispatch) => {
    return request
    .post('http://gamification.0x00000000.me/quests')
    .type('form')
    .send({ text, type, ...options })
    .end(function(err, res){
        if(res.body.code == 200){
          let newQuest = res.body.data;
          dispatch(addQuest(newQuest))
        }else{
          alert("ERROR: CODE" + res.body.code);
        }
    });
  }
}

export function fetchEditQuest(quest) {
  return (dispatch) => {
    return request
    .put('http://gamification.0x00000000.me/quests/' + quest.id)
    .type('form')
    .send(quest)
    .end(function(err, res){
        if(res.body.code == 200){
          let newQuest = res.body.data;
          dispatch({type: actionTypes.EDIT_QUEST, newQuest})
        }else{
          alert("ERROR: CODE" + res.body.code);
        }
    });
  }
}
