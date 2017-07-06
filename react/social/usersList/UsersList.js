import React from "react";
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {setUsersList, selectUser} from "../../actions/creators";
import userService from "../../services/UserService";

import "./users-list.scss";


class UsersList extends React.Component {

    constructor(props){
        super(props);
        this.getUsers();
    }

    getUsers(){
        userService
            .getAllUsers()
            .then( this.appendUsersList.bind(this) );
    }

    appendUsersList(list){
        this.props.addUsersList(list);
    }


    renderUser(user, index){

        return  <li key={index} id={index+1}>
                  <NavLink activeClassName="active" to={`/users/user/${user.id}`} key={index}>{user.name}</NavLink>
                </li>
    }

    render(){
        return (<nav className="users-list">
                    <h3>Users List</h3>
                    <ul>
                        { this.props.users.map(this.renderUser.bind(this)) }
                    </ul>
                </nav>)
    }
}

function mapStateToProps(state){
    return{
        users: state.friends.filterdList,
    }
}

function mapDispatchToProps(dispatch){
    return{
        addUsersList: (list) => dispatch(setUsersList(list)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList))
