import React from 'react';
import {connect} from 'react-redux';
import {removeFriend, addFriendId} from '../../actions/creators';
import {NavLink} from 'react-router-dom';

import './friends.scss';

class Friends extends React.Component {

    constructor(props){
        super(props);
        this.getFriends();
    }

    getFriends(){
        if(window.localStorage.getItem('friendList')!==null){
            let friendsIds =  JSON.parse(window.localStorage.getItem('friendList'));
            friendsIds.map( (userId) => {this.props.addFriendId(userId)} );
        }
        else {
            console.log("storage clear");
            return null
        }

    }

    render() {
        console.log(this.props.friendsList);
        if(this.props.friendsList.length){
            return (<div className="friends">
                    <ul>
                        {this.props.friendsList.map( (friend, i)=>{
                                return <li key={i}>
                                    <button onClick={()=>this.props.removeFriend(friend.id)}>Remove</button>
                                    <NavLink to={`/users/user/${friend.id}`}>
                                        <h2>{friend.name}</h2>
                                        <p>{friend.email}</p>
                                    </NavLink>
                                </li>
                            }
                        )}
                    </ul>
                </div>
            )
        }
        else
            return <div className="friends">
                <h3>No Friends Added</h3>
            </div>
    }
}


function mapStateToProps(state) {
    return {
        friendsList: state.friends.friendsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFriend: (id) => dispatch(removeFriend(id)),
        addFriendId: (id) => dispatch(addFriendId(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)
