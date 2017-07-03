import React from "react";
import {connect} from 'react-redux';

import UsersList from "../usersList/UsersList";
import UserPage from "./userPage/UserPage";

import '../main.scss';

class Users extends React.Component {


    render(){
        return (<div className="users">
                    <UsersList />
                    <UserPage userSelected={this.props.userSelected}/>
                </div>)
    }
}

function mapStateToProps(state){
    return{
        userSelected: state.friends.userSelected,
    }
}


export default connect(mapStateToProps, null)(Users)
