import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement('h1', {class: 'heading'}, 'Hello World from React');
console.log(heading);

const parent = React.createElement("div", {id: "Parent"}, 
    [
        React.createElement("div", {id: "Child1"}, 
            React.createElement("h1", {}, "This is a heading")
        ),
        React.createElement("div", {id: "Child2"}, 
            React.createElement("h1", {}, "This is a heading")
        )
    ]
);

const jsxHeading = (<h1 className="heading">
    This is a JSX heading</h1>);

const Desc = () => {
    return <p>This the paragraph.</p>
}
const number = 10;
const Headingcomponent = () => (
    <div>
        <h1 className="heading">This is a heading component.</h1>
        <p>this is {number}</p> 
        {/* javascript in html */}
        {jsxHeading} 
        {/* react element in html */}
        <Desc /> 
        {/* composit component */}
    </div>   
);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Headingcomponent/>);
// first letter is always capital in react components.
