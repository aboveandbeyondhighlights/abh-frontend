import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import { customInput } from './fields';
import RegisterForm from './RegisterForm';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Field
          name="email"
          component={customInput}
          type="text"
          label="Email Address"
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
        />
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
