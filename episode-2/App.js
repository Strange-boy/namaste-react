//here we are importing these two statements from the node modules
import React from "react";
import ReactDOM from "react-dom/client";

/* In order to create a nested element*/
const content = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "Namaste react"),
		React.createElement("h2", {}, "learned by joel jacob"),
	])
);

console.log(content);

//now we need to create a root file where the object needs to be render
const root = ReactDOM.createRoot(document.getElementById("rootFile"));

//in order to render the content into the root file
root.render(content);
