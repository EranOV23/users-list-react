import React from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {logInUser} from '../actions/creators';

import './login.scss'

class Login extends React.Component{
  constructor(){
      super();
  }

    userLogIn(){
      console.log(this.user.value)
      this.props.logIn({name: this.user.value})
    }


  render(){
    if(!this.props.isLoggedIn){
      return(
        <div className="login">
          <h1>Login page</h1>
          <form onSubmit={ ()=> this.userLogIn() }>
              <input type="text" ref={ (e) => this.user = e }/>
              <input type="submit" value="Login"/>
          </form>
        </div>
      )
    }
    else {
      return <Redirect to="/about"/>
    }
  }
}

function mapStateToProps(state){
  return{
    isLoggedIn: state.loggedInUser
  }
}

function mapDispatchToProps(dispatch){
  return{
      logIn: (user)=> dispatch(logInUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
