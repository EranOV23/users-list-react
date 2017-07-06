import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import userService from "../../../services/UserService";
import PostsService from "../../../services/PostsService";

import "./user-page.scss";

export default class UserPage extends React.Component {

    constructor({match}){
      super();
      this.state = {
        userId : match.params.id,
        user: {},
        posts: [],
      }
      this.getDeatils(this.state.userId);
      this.getPosts(this.state.userId);

    }

    componentWillReceiveProps({match}){
      let userId = match.params.id;
      this.setState({userId});
      this.getDeatils(userId);
      this.getPosts(userId);
    }

    // Get User Details
    getDeatils(id){
      userService
        .getUser(id)
        .then( this.setUser.bind(this) )
    }

    setUser(user){
      this.setState({user})
    }

    // Get User Posts
    getPosts(id){
        PostsService
            .getPosts(id)
            .then( this.setPosts.bind(this) )
    }

    setPosts(posts){
      this.setState({posts})
    }

    render(){
        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
