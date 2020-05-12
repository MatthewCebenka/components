import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" date='Today at 4pm' avatar={faker.image.avatar()}/>
      <CommentDetail author="Alex" date='Today at 2pm' avatar={faker.image.avatar()}/>
      <CommentDetail author="Jane" date='Yesterday at 5pm' avatar={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
