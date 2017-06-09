import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";
import userService from "./UserService";
import PostsService from "./PostsService";



import "./user-page.scss";


export default class UserPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            user: {},
            posts: [],
        }
        this.getUser(this.props.userId);
        this.getPosts(this.props.userId);        
    }

    getUser(userId){
        console.log("enter getUser")

        userService
            .getUser(userId)
            .then( this.changeUserState.bind(this) );
    }

    changeUserState(user){
        this.setState({
            user: user
        })
        // console.log(this.state.user);
    }

    getPosts(userId){
        console.log("enter getPosts")
        PostsService
            .getPosts(userId)
            .then( this.changePostsState.bind(this) )
    }

    changePostsState(posts){
        this.setState({
            posts: posts
        })
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.getPosts(nextProps.userId);
        this.getUser(nextProps.userId); 
    }

    render(){

        return (<main className="user-page">
                    <UserDetails user={ this.state.user }/>
                    <UserPosts posts={ this.state.posts }/>
                </main>)
    }
}
