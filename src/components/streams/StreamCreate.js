import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  }

  render() {
    return (
      <form>
        <Field name="Title" component={this.renderInput} />

        <Field name="Description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
  // ↑the purpose of this form
})(StreamCreate);
