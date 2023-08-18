// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Hello World from React!"
// );

// //now we have to create a root file where all the files need to render
// const root = ReactDOM.createRoot(document.getElementById("rootFile"));

// //finally we have to render our files
// root.render(heading);

/*
suppose we want to create a react element like this
<div class="parent">
	<div class="child">
		<h1>I am an h1 tag</h1>
		<h2>I am an h2 tag</h2>
	</div>
</div>
*/

/* In order to create a nested element*/
const content = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "I am an H1 Tag"),
		React.createElement("h2", {}, "I am an H2 Tag"),
	])
);

console.log(content);

//now we need to create a root file where the object needs to be render
const root = ReactDOM.createRoot(document.getElementById("rootFile"));

//in order to render the content into the root file
root.render(content);
