/* 
 <div id="parent">
    <div id="child">
    <h1></h1>
    </div>
 </div>
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am h1 heading"),
    React.createElement("h2", {}, "I am h2 heading")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I am h1 heading"),
    React.createElement("h2", {}, "I am h2 heading")]
  )]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "xyz" },
//   "This is coming from react cdn"
// );
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
