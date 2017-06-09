import React from "react";
import UserPage from "./UserPage";
import UsersList from "./UsersList";
import userService from "./UserService";


import './main.scss';

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
        this.getUsers();

        this.state = {
        	users: [],
        	userPicked: 1,
        }
	}

	getUsers(){
        userService
            .getAllUsers()
            .then( this.appendUsersList.bind(this) );

	}

    appendUsersList(list){
        this.setState({
        	users: list
        })
    }

    handleClick(userClicked){
    	this.setState({
    		userPicked: parseInt(userClicked.target.getAttribute("id"))
    	})
    }

    render(){
        return (<div>
                    <UsersList handleClick={this.handleClick.bind(this)} users={this.state.users}/>
                    <UserPage userId={this.state.userPicked}/>
                </div>)
    }
}
