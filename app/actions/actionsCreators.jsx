import request from 'superagent';
import { normalize, Schema, arrayOf } from 'normalizr';

import * as actionTypes from './actionTypes.jsx';

export function addQuest(text = "") {
  return {type: actionTypes.ADD_QUEST, text}
}

function requestPosts() {
  return {
    type: 'REQUEST_POSTS'
  }
}

function receivePosts(data) {
  return {
    type: 'RECEIVE_POSTS',
    data: data
  }
}

export function fetchPosts() {
  return dispatch => {
    //dispatch(requestPosts())
    return request
    .get('http://gamification.0x00000000.me/quests/tree')
    .end(function(err, res){
        // let shit = normalize(fuck, {data: arrayOf(new Schema('data'))})
        // let data = normalize(fuck, arrayOf(new Schema('data')))
        let data = res.body.data;
        // console.log(res);
        dispatch(receivePosts(data))
    });
  }
}
