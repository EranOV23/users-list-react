import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getUser, addFriend} from '../../../actions/creators';

import "./user-page.scss";

class UserPage extends React.Component {

    constructor(props){
        super(props);

        if(props.match.params.id){
            this.props.getUser(props.match.params.id);
        }
    }

    componentWillReceiveProps({match}){
        let userId = match.params.id;
        if(match.params.id &&  match.params.id !== this.props.match.params.id){
            this.props.getUser(userId);
        }
    }

    render(){
        if(this.props.isLoading)
            return(<main className="user-page">
                <h3>Is Loading...</h3>
            </main>);

        return (<main className="user-page">
            <button onClick={()=>this.props.addFriend(this.props.userSelectedDetails) }>Add friend</button>
            <UserDetails user={ this.props.userSelectedDetails }/>
            <UserPosts posts={ this.props.userSelectedPosts }/>
        </main>)
    }
}

function mapStateToProps(state) {
    return{
        userSelectedDetails: state.friends.userSelected.details,
        userSelectedPosts: state.friends.userSelected.posts,
        isLoading: state.friends.userSelected.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUser: (id) => dispatch(getUser(id)),
        addFriend: (friend) => dispatch(addFriend(friend)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));