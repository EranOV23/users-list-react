import React from "react";
import {Route} from 'react-router';
import UserPage from "./userPage/UserPage";
import UsersList from "../usersList/UsersList";

import '../../main.scss';

export default class Users extends React.Component {

    render(){
        return (<div className="users">
                    <UsersList/>
                    <Route path="/users/user/:id" component={UserPage}/>
                </div>)
    }
}
