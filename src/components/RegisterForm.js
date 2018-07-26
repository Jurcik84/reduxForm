import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sign Up to newslatter</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label>Sign Up to newslatter</label>
          <Field name="preference" component="select">
            <option value="tabs">a</option>
            <option value="spaces">a</option>
          </Field>
        </div>
        <div>
          <label>Sign Up to newslatter</label>
          <Field name="newsletter" component="input" type="checkbox" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "RegisterForm" // a unique identifier for this form
})(RegisterForm);

export default RegisterForm;
