import * as ACTIONS from './index';
import UserService from '../services/UserService';
import PostsService from '../services/PostsService';


export function addUser(user){
	return {type: ACTIONS.ADD_USER, user}
}

export function setUsersList(list){
	return {type: ACTIONS.SET_USERS_LIST, list}
}

export function removeUser(user){
	return {type: ACTIONS.REMOVE_USER, user}
}

export function selectUser(user){
	return {type: ACTIONS.SELECT_USER, user}
}

export function selectUserPosts(posts){
	return {type: ACTIONS.SELECT_USER_POSTS, posts}
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

export function getUserDetails(id) {
	return dispatch => {
		dispatch({type: ACTIONS.GET_USER_DETAILS_REQUEST, id})

		UserService.getUser(id)
			.then( user => dispatch({type: ACTIONS.GET_USER_DETAILS_RESPOND, user}))
	}
}


export function getUserPosts(id) {
    return dispatch => {
        dispatch({type: ACTIONS.GET_USER_POSTS_REQUEST, id})

        PostsService.getPosts(id)
            .then( posts => dispatch({type: ACTIONS.GET_USER_POSTS_RESPOND, posts}))
    }
}

