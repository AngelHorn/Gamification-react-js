import request from 'superagent';
import { normalize, Schema, arrayOf } from 'normalizr';

import * as actionTypes from './actionTypes.jsx';

export function addQuest(text = "") {
  return {type: actionTypes.ADD_QUEST, text}
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
