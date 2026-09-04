const heading = React.createElement("h1", { id: "Head" }, "This is h1..");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* <div id="parent">
<div id="child1">
    <h1>i am h1</h1>
    <h2>i am h2</h2>
</div>
<div id="child2">
<h1>i am h1</h1>
<h2>i am h2</h2>
</div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is h1 tag.."),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 tag.."),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
]);

root.render(parent);
