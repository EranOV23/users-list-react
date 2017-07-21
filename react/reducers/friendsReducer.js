import {combineReducers} from 'redux'
import {
	ADD_USER,
	REMOVE_USER,
	FILTER_LIST,
	GET_USERS_RESPOND,
	GET_USERS_REQUEST,
    ADD_FRIEND,
    REMOVE_FRIEND,} from '../actions';

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

function friendsListReducer(state = [] , action) {
	switch (action.type){
		case ADD_FRIEND:
            if(state.find( (friend) => friend.id === action.friend.id)){
                console.log('friend Already Added');
                return [...state];
			}
            else{
                console.log('friend Added');
                return [...state, action.friend];
            }

		case REMOVE_FRIEND:
			return state.filter( (friend) => friend.id !== action.id );
    }
    return state;
}

function friendsIdsReducer(state = [] , action) {
    switch (action.type){
        case ADD_FRIEND:
            if(state.find( (id) => id === action.friend.id)){
                console.log('Already in storage');
                return [...state];
			}
			else {
                let friendListToString = JSON.stringify([...state, action.friend.id]);
                window.localStorage.setItem('friendList', friendListToString);
                console.log('Added To storage');
                return [...state, action.friend.id];
			}

        case REMOVE_FRIEND:
            let friendsIds =  JSON.parse(window.localStorage.getItem('friendList'));
            friendsIds = friendsIds.filter( (id) => id !== action.id );
            window.localStorage.setItem('friendList', JSON.stringify(friendsIds));
            return state.filter( (id) => id !== action.id );
    }
    return state;
}


export default combineReducers({
    	isLoading: isLoadingReducer,
    	filteredList: filteredListReducer,
		usersList: usersListReducer,
		userSelected: selectedUserReducer,
    	friendsList: friendsListReducer,
    	friendsIds: friendsIdsReducer,
})