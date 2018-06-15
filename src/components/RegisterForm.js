import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { customInput } from './fields';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="first_name"
          component={customInput}
          type="text"
          label="First Name"
        />
        <Field
          name="last_name"
          component={customInput}
          type="text"
          label="Last Name"
        />
        <Field
          name="email"
          component={customInput}
          type="text"
          label="Email"
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;
