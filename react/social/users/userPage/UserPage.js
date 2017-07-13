import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getUserDetails, getUserPosts} from '../../../actions/creators';

import "./user-page.scss";

class UserPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userId : this.props.match.params.id,
        };

        if(props.match.params.id){
            this.props.getUserDetails(this.state.userId);
            this.props.getUserPosts(this.state.userId);
        }
    }

    componentWillReceiveProps({match}){
        let userId = match.params.id;
        if(match.params.id &&  match.params.id !== this.props.match.params.id){
            this.props.getUserDetails(userId);
            this.props.getUserPosts(userId);
        }
    }

    render(){
        if(this.props.isLoading)
            return(<main className="user-page">
                <h3>Is Loading...</h3>
            </main>);

        return (<main className="user-page">
            <UserDetails user={ this.props.userSelectedDetails }/>
            <UserPosts posts={ this.props.userSelectedPosts }/>
        </main>)
    }
}

function mapStateToProps(state) {
    return{
        userSelectedDetails: state.friends.userSelected.details,
        userSelectedPosts: state.friends.userSelected.posts,
        isLoading: state.friends.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserDetails: (id) => dispatch(getUserDetails(id)),
        getUserPosts: (id) => dispatch(getUserPosts(id)),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));