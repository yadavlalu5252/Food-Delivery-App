import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useState } from "react";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));
// import Grocery from "./components/Grocery";

const AppLayout = () => {
    const [userName, setUsername] = useState();
    useEffect(()=> {
        const data = {
            name: "Lalu Yadav"
        }
        setUsername(data.name)
    },[])
    return (
        
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName,setUsername}}>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
            <Outlet />
            </main>
            <Footer />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },  
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }      
        ],
        errorElement: <Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);