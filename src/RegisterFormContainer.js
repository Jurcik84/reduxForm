import React, { Component } from "react";

//
import RegisterForm from "./components/RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 2));
  };
  getInitialValues() {
    return {
      preference: "spaces",
      newsletter: true
    };
  }
  render() {
    return (
      <div className="App">
        <RegisterForm
          initialValues={this.getInitialValues()}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

export default RegisterFormContainer;
