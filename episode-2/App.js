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
