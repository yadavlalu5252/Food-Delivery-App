import React from "react";
import ReactDOM from "react-dom/client";

// react element
const jsxHeading = <h1 className="head">this is from jsx element</h1>


// React Component
const LaluYadav = () => <h1>This is LaluYadav</h1>

// React Composition
const Lalu = () => {
    return (
        <div id="container">
            {5+5} // jsx is sanitising this data and then they process {}
            {jsxHeading} // we can simply pass react element inside react Component
            <LaluYadav />
            {LaluYadav()}
            <h1>This is Lalu</h1>
        </div>
)
}



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<Lalu/>); // this will replace h1 tag of previous code
