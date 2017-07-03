import React from 'react';
import {Link} from 'react-router-dom';

import './nav.scss'

export default class Nav extends React.Component{
  render(){
    return(
      <div className="nav">
          <Link to="/">About</Link>
          <Link to="/users">Users</Link>
      </div>
    )
  }
}
