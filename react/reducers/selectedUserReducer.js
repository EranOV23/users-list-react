import { combineReducers } from 'redux';
import { REMOVE_USER,
        GET_USER_DETAILS_RESPOND,
        GET_USER_POSTS_RESPOND,} from '../actions';


function detailsReducer(state = null, action){

  switch(action.type){

    case REMOVE_USER:
        return state === action.user ? null : state;

    case GET_USER_DETAILS_RESPOND:
        return action.user;
  }

  return state
}

function postsReducer(state = null ,action){
    switch(action.type){

      case GET_USER_POSTS_RESPOND:
          return action.posts;
    }

    return state
}


export default combineReducers({
  details: detailsReducer,
  posts: postsReducer
})
