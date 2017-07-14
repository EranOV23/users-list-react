import {combineReducers} from 'redux'
import {
	ADD_USER,
	REMOVE_USER,
	FILTER_LIST,
	GET_USERS_RESPOND,
	GET_USERS_REQUEST,} from '../actions';

import selectedUserReducer from './selectedUserReducer'

function usersListReducer(state = [], action){
	switch(action.type){
		case ADD_USER:
			return  [...state, action.user];

		case REMOVE_USER:
			return 	state.filter( (user) => user.id!==action.user.id );

		case GET_USERS_RESPOND:
			return [...action.users];
	}

	return state;
}

function filteredListReducer(state = [], action){
	switch(action.type){

        case REMOVE_USER:
            return 	state.filter( (user) => user.id!==action.user.id );

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
	}

	return state;
}



export default combineReducers({
    	isLoading: isLoadingReducer,
    	filteredList: filteredListReducer,
		usersList: usersListReducer,
		userSelected: selectedUserReducer,
})