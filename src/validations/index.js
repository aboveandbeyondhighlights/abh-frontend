export const validate = values => {
  const errors = {};

  if(!values.firstname) {
    errors.firstname = 'First name is required';
  }

  if(!values.lasttname) {
    errors.firstname = 'Last name is required';
  }

  if(!values.email) {
    errors.firstname = 'Email is required';
  }

  if(!values.password) {
    errors.firstname = 'Password is required';
  }
};
