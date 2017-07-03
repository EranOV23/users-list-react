import * as ACTIONS from './index'

export function addUser(user){
	return {type: ACTIONS.ADD_USER, user}
}

export function addUsersList(list){
	return {type: ACTIONS.ADD_USERS_LIST, list}
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
