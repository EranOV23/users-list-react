import {createStore} from 'redux';
import appReducers from './reducers';
import LoginService from './services/loginService';

const initState = {

	loggedInUser: LoginService.get(),
	friends: {
		filterdList: [],
		usersList: [],
		userSelected: {
			details: null,
			posts: [],
		}
	}
}

export default createStore(
	appReducers,
	initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
