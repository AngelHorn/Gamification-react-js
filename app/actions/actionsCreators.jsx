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

export function completeQuest(id){
    return {type: actionTypes.COMPLETE_QUEST,id}
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
        let quests = res.body.data;
        // console.log(res);
        dispatch(receiveQuests(quests))
    });
  }
}

export function fetchAddQuest(text, type) {
  return (dispatch) => {
    return request
    .post('http://gamification.0x00000000.me/quests')
    .type('form')
    .send({ text, type })
    .end(function(err, res){
        let newQuest = res.body.data;
        dispatch(addQuest(newQuest))
    });
  }
}
