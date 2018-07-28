import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

//custom
import { customInput, customSelect } from "./fields/index";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Field
          name="firstname"
          component={customInput}
          type="text"
          label="First Name"
        />
        <Field
          name="surname"
          component={customInput}
          type="text"
          label="Surname"
        />

        <Field
          name="username"
          component={customInput}
          type="text"
          label="User Name"
        />

        <Field
          name="preferencies"
          component={customSelect}
          label="preferencies"
        />

        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Name"
        />

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
