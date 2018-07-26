import React, { Component } from "react";

//
import RegisterForm from "./components/RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 2));
  };
  render() {
    return (
      <div className="App">
        <RegisterForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default RegisterFormContainer;
