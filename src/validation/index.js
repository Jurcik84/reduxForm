export const validate = values => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "First name is required";
  }
  if (!values.surname) {
    errors.surname = "surname name is required";
  }
  if (!values.username) {
    errors.username = "username name is required";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 characters";
  } else if (values.username.length > 10) {
    errors.username = "Username must be at max 10 characters";
  }

  return errors;
};
