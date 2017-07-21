import {createStore, applyMiddleware} from 'redux';
import appReducers from './reducers';
import LoginService from './services/loginService';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const initState = {

	loggedInUser: LoginService.get(),
	friends: {
	    isLoading: false,
        filteredList: [],
		usersList: [],
		userSelected: {
			details: {name: "eran", email: "eran@gmail.ocm"},
			posts: [{body: "body", title: "title"}],
            isLoading: false,
		},
        friendsList: [],
		friendsIds: [],
    }
};


let middlewares = applyMiddleware(thunk);

export default createStore(
	appReducers,
	initState,
    composeWithDevTools(middlewares),
);
