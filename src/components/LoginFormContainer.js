import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { logInUser } from '../actions/sessionActions';

class LoginFormContainer extends Component {
  submit = (credentials) => {
    this.props.dispatch(logInUser(credentials));
  }

  render() {
    return <LoginForm onSubmit={this.submit} />
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logInUser: logInUser
  }
}

export default connect(mapDispatchToProps)(LoginFormContainer);
