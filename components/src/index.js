import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" date='Today at 4pm'/>
      <CommentDetail author="Alex" date='Today at 2pm'/>
      <CommentDetail author="Jane" date='Yesterday at 5pm'/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
