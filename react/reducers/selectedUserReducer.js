import { combineReducers } from 'redux';
import { REMOVE_USER, SELECT_USER, SELECT_USER_POSTS } from '../actions';


function detailsReducer(state = null, action){

  switch(action.type){

    case SELECT_USER:
    return action.user;

    case REMOVE_USER:
    return state == action.user ? null : state;
  }

  return state
}

function postsReducer(state = null ,action){
    switch(action.type){

      case SELECT_USER_POSTS:
      return action.posts;
    }

    return state
}

export default combineReducers({
  details: detailsReducer,
  posts: postsReducer
})
