import * as ACTIONS from './index';
import UserService from '../services/UserService';
import PostsService from '../services/PostsService';


export function addUser(user){
	return {type: ACTIONS.ADD_USER, user}
}

export function addFriend(friend){
    return {type: ACTIONS.ADD_FRIEND, friend}
}

export function removeFriend(id){
    return {type: ACTIONS.REMOVE_FRIEND, id}
}

export function removeUser(user){
    return {type: ACTIONS.REMOVE_USER, user}
}

export function logInUser(user){
	return {type: ACTIONS.LOG_IN, user}
}

export function logOutUser(){
	return {type: ACTIONS.LOG_OUT}
}

export function FilterList(filter, list){
	return {type: ACTIONS.FILTER_LIST, filter, list}
}

export function getUsersList() {
	return dispatch => {
		dispatch({type: ACTIONS.GET_USERS_REQUEST});

        UserService.getAllUsers()
			.then( users => dispatch( {type: ACTIONS.GET_USERS_RESPOND, users} ))
	}
}

export function getUser(id) {
	return dispatch => {
		dispatch({type: ACTIONS.GET_USER_REQUEST, id});

		Promise.all([UserService.getUser(id), PostsService.getPosts(id)])
			.then( ([user, posts]) => dispatch({type: ACTIONS.GET_USER_RESPOND, user, posts }))
	}
}

export function addFriendId(id){

    return dispatch => {
        dispatch({type: ACTIONS.ADD_FRIEND_ID, id});

        UserService.getUser(id)
            .then( (friend) => dispatch({type: ACTIONS.ADD_FRIEND, friend }))
    }

}
