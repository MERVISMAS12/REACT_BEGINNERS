// const heading = React.createElement('h1', {class: 'heading'}, 'Hello World from React');
// console.log(heading);

const parent = React.createElement("div", {id: "Parent"}, 
    [
        React.createElement("div", {id: "Child1"}, 
            React.createElement("h1", {}, "This is a heading")
        ),
        React.createElement("div", {id: "Child2"}, 
            React.createElement("h1", {}, "This is a heading")
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);