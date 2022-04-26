import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    // ↑(meta.error and meta.touched)
    if (touched && error)
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    // ↑this will highlight the input box pink when there is an error
    console.log(meta);
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
        // ↑have to add "error" for showing the error messages.  semantic ui by default not showing error messages.
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        {/* component is what you want to show on the screen */}

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

const formWrapped = reduxForm({
  form: "streamCreate",
  // ↑the purpose ot name of this form
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
