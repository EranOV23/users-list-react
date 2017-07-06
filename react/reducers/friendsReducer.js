import {combineReducers} from 'redux'
import {ADD_USER, SET_USERS_LIST, REMOVE_USER, SELECT_USER, SELECT_USER_POSTS, FILTER_LIST} from '../actions'
import selectedUserReducer from './selectedUserReducer'

function usersListReducer(state = [], action){
	switch(action.type){
		case ADD_USER:
		return  [...state, action.user];

		case REMOVE_USER:
		return 	state.filter( (value) => value!==action.user );

		case SET_USERS_LIST:
		return [...action.list];

	}

	return state;
}


function filterdListReducer(state = [], action){

	switch(action.type){

		case SET_USERS_LIST:
		return [...action.list];

		case FILTER_LIST:
		return action.list.filter( (user) => user.name.toString().toLowerCase().includes(action.filter) );

	}

	return state;
}


export default combineReducers({
		filterdList: filterdListReducer,
		usersList: usersListReducer,
		userSelected: selectedUserReducer
})
