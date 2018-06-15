import React from 'react';
import { Form } from 'semantic-ui-react';

export const customInput = (props) => {
  return(
    <Form.Field>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
    </Form.Field>
  );
};
