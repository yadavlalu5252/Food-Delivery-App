import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header.jsx";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("Should load Header Component with login Button", ()=> {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
    const loginBtn = screen.getByRole("button");

    // if there is multiple buttons and we want to find specific button.
    const loginBtn1 = screen.getByRole("button", {name: "Login"});

    expect(loginBtn).toBeInTheDocument();
});

test("Should load Header Component with Cart of 0 Items", ()=> {

    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
    const cartItem = screen.getByText("Cart (0 items)");
    // const cartItem = screen.getByText(/Cart/); for many items we can use regex
    expect(cartItem).toBeInTheDocument();
})

test("Should load Header Component with onclick behaviour of the login button", ()=> {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument();
})