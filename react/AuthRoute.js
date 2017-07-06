import React from 'react';
import {Route, Redirect, withRouter} from 'react-router';
import {connect} from 'react-redux';

class AuthRoute extends React.Component{

  render(){
    if(this.props.isLogin)
      return <Route path={this.props.path} component={this.props.component}/>
    else
      return <Redirect to="/login"/>
  }
}

function mapStateToProps(state){
  return{
    isLogin: state.loggedInUser
  }
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute));
