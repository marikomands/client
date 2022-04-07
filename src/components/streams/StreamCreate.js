import React from "react";
import { Field, reduxForm, updateSyncErrors } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    console.log("🚀 ~ StreamCreate ~ renderInput ~ meta", meta);

    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "you must enter a title";
  }
  if (!formValues.description) {
    errors.description = "you must enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "streamCreate",
  // ↑the purpose ot name of this form
  validate,
})(StreamCreate);
