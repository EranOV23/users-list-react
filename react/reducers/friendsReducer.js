import {combineReducers} from 'redux'
import {
	ADD_USER,
	REMOVE_USER,
	FILTER_LIST,
	GET_USERS_RESPOND,
	GET_USERS_REQUEST,
    GET_USER_POSTS_REQUEST,
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_RESPOND,
    GET_USER_POSTS_RESPOND,} from '../actions';

import selectedUserReducer from './selectedUserReducer'

function usersListReducer(state = [], action){
	switch(action.type){
		case ADD_USER:
			return  [...state, action.user];

		case REMOVE_USER:
			return 	state.filter( (value) => value!==action.user );

		case GET_USERS_RESPOND:
			return [...action.users];
	}

	return state;
}

function filteredListReducer(state = [], action){

	switch(action.type){

        case GET_USERS_RESPOND:
            return [...action.users];

		case FILTER_LIST:
			return action.list.filter( (user) => user.name.toString().toLowerCase().includes(action.filter) );

	}

	return state;
}

function isLoadingReducer(state = false , action) {
	switch (action.type){

		case GET_USERS_RESPOND:
            return false;

		case GET_USERS_REQUEST:
			return true;

        case GET_USER_POSTS_RESPOND:
            return false;

		case GET_USER_POSTS_REQUEST:
			return true;

        case GET_USER_DETAILS_RESPOND:
            return false;

		case GET_USER_DETAILS_REQUEST:
			return true;
	}

	return state;
}



export default combineReducers({
    	isLoading: isLoadingReducer,
    	filteredList: filteredListReducer,
		usersList: usersListReducer,
		userSelected: selectedUserReducer,
})