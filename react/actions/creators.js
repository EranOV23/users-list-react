import * as ACTIONS from './index'

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
