import React from "react";
import ReactDOM from "react-dom/client";

// Core React

// React.createElement => ReactElement(JS Object) => HTML-Element(render)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1",key: "child1" }, [
//     React.createElement("h1", {key: "h1"}, "this is h1 tag.."),
//     React.createElement("h2", {key: "h2"}, "this is h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2",key: "child2" }, [
//     React.createElement("h1", {key: "h1"}, "this is h1 tag.."),
//     React.createElement("h2", {key: "h2"}, "this is h2 tag"),
//   ]),
// ]);

// root.render(parent);

// React With Jsx

// JSX => React.createElement => ReactElement(JS Object) => HTML-Element(render)

// React Element
const root = ReactDOM.createRoot(document.getElementById("root"));

const JsxHeading = <h1 id="hello">Hello World by Jsx..</h1>;

root.render(JsxHeading);

// React Components
// Class Based ->Old
// Functional Component->New

// Functional Component

const Head1 = () => {
  return <h1>WTF!!</h1>;
};
const Head2 = () => (
  <div>
    <h1>What's Up!!</h1>
    {/* The Below three are the ways to use js functional components inside one other or anything else also..any js code can be writeen in this curly braces */}
     {<Head1></Head1>}
     {<Head1/ >}
     {Head1()}
  </div>
);

root.render(<Head2 />);
