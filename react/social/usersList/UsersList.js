import React from "react";
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {setUsersList, selectUser, getUsersList} from "../../actions/creators";

import "./users-list.scss";


class UsersList extends React.Component {

    constructor(props){
        super(props);
        this.props.getUsersList();
    }

    renderUser(user, index){

        return  <li key={index} id={index+1}>
                  <NavLink activeClassName="active" to={`/users/user/${user.id}`} key={index}>{user.name}</NavLink>
                </li>
    }

    render(){
        if(this.props.isLoading)
            return (<nav className="users-list">
                        <h3>Loading...</h3>
                    </nav>);

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
        users: state.friends.filteredList,
        isLoading: state.friends.isLoading,
    }
}

function mapDispatchToProps(dispatch){
    return{
        addUsersList: (list) => dispatch(setUsersList(list)),
        getUsersList: () => dispatch(getUsersList())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersList))
