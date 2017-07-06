import React from 'react';
import Users from './users/Users';
import About from './about/About';

import Nav from './header/nav';
import {Route} from 'react-router';

export default class Social extends React.Component{
  render(){
    return(
      <div>
        <Route exact path="" component={Nav}/>
        <Route path="/users" component={Users}/>
        <Route exact path="/about" component={About}/>
      </div>
    )
  }
}
