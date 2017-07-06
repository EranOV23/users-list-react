import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addUsersList, selectUser} from "../actions/creators";
import userService from "../services/UserService";

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

        return <Link to={`user/${user.id}`}><li onClick={ () => this.props.selectUser(user) }
                    key={index}
                    id={index+1}> {user.name}
                </li></Link>
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
        users: state.friends.usersList,
    }
}


function mapDispatchToProps(dispatch){
    return{
        addUsersList: (list) => dispatch(addUsersList(list)),
        selectUser: (user) => dispatch(selectUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
