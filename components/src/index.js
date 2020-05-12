import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from  './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard />
      <CommentDetail
        author="Sam"
        date="Today at 4pm"
        avatar={faker.image.avatar()}
        comment="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        date="Today at 2pm"
        avatar={faker.image.avatar()}
        comment="Nice blog post!"
      />
      <CommentDetail
        author="Jane"
        date="Yesterday at 5pm"
        avatar={faker.image.avatar()}
        comment="Nice blog post!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
