import React from "react";


import "./users-list.scss";


export default class UsersList extends React.Component {

    constructor(props){
        super(props);
    }


    renderUser(user, index){

        return <li onClick={ this.props.handleClick }
                    key={index} 
                    id={index+1}> {user.name}
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
