import React from "react";
import {connect} from 'react-redux';
import {selectUserPosts} from "../../actions/creators";

import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import userService from "../../services/UserService";
import PostsService from "../../services/PostsService";

import "./user-page.scss";

class UserPage extends React.Component {

    componentWillReceiveProps(nextProps){
        if(this.validate(nextProps.userSelected, this.props.userSelected))
        this.getPosts(nextProps.userSelected.details);
    }

    validate(nextUser, prevUser){
      console.log(prevUser)
      if(prevUser)
      return true;

      if(nextUser.details.id != prevUser.details.id)
      return true;

    }

    getPosts(user){
        PostsService
            .getPosts(user.id)
            .then( this.changePostsState.bind(this) )
    }

    changePostsState(posts){
        this.props.selectPosts(posts);
    }

    render(){

        return (<main className="user-page">
                    <UserDetails user={ this.props.userSelected.details }/>
                    <UserPosts posts={ this.props.userSelected.posts }/>
                </main>)
    }
}


function mapDispatchToProps(dispatch){
    return{
        selectPosts: (posts) => dispatch(selectUserPosts(posts))
    }
}

export default connect(null, mapDispatchToProps)(UserPage)
