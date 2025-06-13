import { useEffect, useState } from "react";

const User = (prop) => {
    const [count] = useState(0);

    // how to clear a interval in useEffect in functional components

    useEffect(()=>{
        // const timer = setInterval(()=>{
        //     console.log("Set Interval");
        // },1000);
        console.log("Use Effect");
        return () => {
            // clearInterval(timer);
            console.log("useEffect Return");
        };
    },[]);
    
    console.log("Render");



    return(
        <div className="user-card">
            <h1>Count: {count+1+1}</h1>
            <h2>Name: {prop.name}</h2>
            <h3>Username: yadavlalu5252</h3>
        </div>
        )
}

export default User;