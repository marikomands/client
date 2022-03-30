import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };

  componentDidMount() {
    // console.log("cdm", this.state, window);
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          // ↑initialize client by call back function  load method only allows call back function
          clientId:
            "546145138944-4m2785mr3v73cm1325ci1pk53ao084n4.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          // ↑update Auth state inside Redux store
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    console.log("🚀 ~ GoogleAuth ~ isSignedIn", isSignedIn);
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn === true) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    console.log("🚀 ~ GoogleAuth ~ onSignInClick", this.onSignInClick);
    this.auth.signIn();
  };

  onSignOutClick = () => {
    console.log("🚀 ~ GoogleAuth ~ onSignOutClick", this.onSignOutClick);
    console.log("🚀 ~ GoogleAuth ~ this.auth.signOut", this.auth.signOut);
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    // console.log("render", this.state);
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
