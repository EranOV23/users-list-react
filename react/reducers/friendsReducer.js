import {combineReducers} from 'redux'
import {ADD_USER, ADD_USERS_LIST, REMOVE_USER, SELECT_USER, SELECT_USER_POSTS} from '../actions'
import selectedUserReducer from './selectedUserReducer'

function usersListReducer(state = [], action){
	switch(action.type){
		case ADD_USER:
		return  [...state, action.user];

		case REMOVE_USER:
		return 	state.filter( (value) => value!==action.user);

		case ADD_USERS_LIST:
		return [...action.list];
	}

	return state;
}

export default combineReducers({
		usersList: usersListReducer,
		userSelected: selectedUserReducer
})
