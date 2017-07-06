import {createStore} from 'redux';
import appReducers from './reducers';

const initState = {

	loggedInUser: null,
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
