import {LOG_OUT, LOG_IN} from '../actions'

export default function authUsersReducer (state = null, action){

	switch(action.type){
		case LOG_OUT:
		return null;

		case LOG_IN:
		return action.user;
	}

	return state
}
