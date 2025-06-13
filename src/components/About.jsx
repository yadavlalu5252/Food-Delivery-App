import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mounted");
    }
    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>I am About</h1>
                <User name={"Lalu Yadav (function)"}/>
                <UserClass name={"First (class)"} username={"yadavlalu5252 (class)"} />
                {/* <UserClass name={"Two (class)"} username={"hitesh5chal (class)"} /> */}
            </div>
        )
    }
}











/* const About = () => {
return (
    <div>
        <h1>I am About</h1>
        <User name={"Lalu Yadav (function)"}/>
        <UserClass name={"Lalu Yadav (class)"} username={"yadavlalu5252 (class)"} />
    </div>
)
}; */

export default About;