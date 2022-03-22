import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};
console.log("🚀 ~ PageOne ~ PageOne", PageOne);

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>click me</button>
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
};
console.log("🚀 ~ PageTwo ~ PageTwo", PageTwo);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
