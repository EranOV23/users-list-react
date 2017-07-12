import {combineReducers} from 'redux'
import friendsReducer from './friendsReducer'
import authUsersReducer from './authUsersReducer'


export default combineReducers({
	friends: friendsReducer,
	loggedInUser: authUsersReducer,
})
