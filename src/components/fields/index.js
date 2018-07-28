import React, { Comment } from "react";

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="tabs">a</option>
        <option value="spaces">a</option>
      </select>
    </div>
  );
};
