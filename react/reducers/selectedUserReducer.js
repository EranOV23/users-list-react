import { combineReducers } from 'redux';
import { REMOVE_USER,
        GET_USER_RESPOND,
        GET_USER_REQUEST} from '../actions';


function detailsReducer(state = null, action){

  switch(action.type){

    case REMOVE_USER:
        return state === action.user ? null : state;

     case GET_USER_RESPOND:
         return action.user;
  }

  return state
}

function postsReducer(state = null ,action){
    switch(action.type){

      case GET_USER_RESPOND:
          return action.posts;
    }

    return state
}

function isLoadingReducer(state = false ,action) {

    switch (action.type){

        case GET_USER_RESPOND:
            return false;

        case GET_USER_REQUEST:
            return true;
    }

    return state;
}


export default combineReducers({
  details: detailsReducer,
  posts: postsReducer,
  isLoading: isLoadingReducer,
})
