import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {FilterList} from "../../actions/creators";
import {logOutUser} from '../../actions/creators';

import './nav.scss'

class Nav extends React.Component{

  logOut(){
      this.props.logOut();
  }

  render(){
    return(
      <div className="nav">
          <div>
              <NavLink to="/about" exact activeClassName="active" >About</NavLink>
              <NavLink to="/users" activeClassName="active">Users</NavLink>
              <input className="filterInput" onChange={ (e) => this.props.setFilter(e.target.value, this.props.list) }/>
          </div>
          <div className="greet">
              <p>Hello {this.props.user}</p>
          </div>
          <button onClick={ ()=> this.logOut()} >Log out</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    list: state.friends.usersList,
    user: state.loggedInUser.name,
  }
}

function mapDispatchToProps(dispatch){
  return{
    setFilter: (filterValue, list) => dispatch(FilterList(filterValue, list)),
      logOut: ()=> dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
