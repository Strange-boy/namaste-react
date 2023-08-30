//here we are importing these two statements from the node modules
import React from "react";
import ReactDOM from "react-dom/client";

//writing the code from scratch
// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Welcome to Namaste React!! "
// );

// console.log(heading);

//in order to write the code using jsx
const jsxHeading = <h1 id="heading">Welcome to Namaste React from JSX!!</h1>;
console.log(jsxHeading);

const rootFile = ReactDOM.createRoot(document.getElementById("rootFile"));

rootFile.render(jsxHeading);
