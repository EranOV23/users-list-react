import {combineReducers} from 'redux'
import friendsReducer from './friendsReducer'
import authUsersReducer from './authUsersReducer'
import selectedUserReducer from './selectedUserReducer'


export default combineReducers({
	friends: friendsReducer,
	loggedInUser: authUsersReducer,
})
