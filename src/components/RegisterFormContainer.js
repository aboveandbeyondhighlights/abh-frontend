import React, { Component } from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

class RegisterFormContainer extends Component {
  submit = values => {
    axios.post('http://localhost:3000/auth/register', values)
    .then(function (response) {
      return response.data.message;
    })
    .catch(function (error) {
      return error;
    });
  }

  render() {
    return <RegisterForm onSubmit={this.submit} />
  }
}

export default RegisterFormContainer;
