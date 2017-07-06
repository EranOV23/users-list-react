import React from 'react';
import {Route} from 'react-router';

import Social from "./social/Social";
import Login from "./auth/Login";
import AuthRoute from "./AuthRoute";

export default class App extends React.Component{
  render(){
    return(
      <div>
        <AuthRoute path="" component={Social}/>
        <Route path="/Login" component={Login}/>
      </div>
    )
  }
}
