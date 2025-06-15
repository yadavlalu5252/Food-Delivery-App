import { fireEvent, getAllByTestId, render,screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
});


test("Should Load restaurant menu component", async() => {

    await act( async()=> render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <Cart />
                <RestaurantMenu />
            </Provider>
        </BrowserRouter>));

    // accordion click
    const accordionHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordionHeader);

    const accordionCount = screen.getAllByTestId("foodItems");
    expect(accordionCount.length).toBe(5);

    // Add + button click
    const addButtons = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addButtons[0]);

    const cartValueChange = screen.getByText("Cart - (1 items)");
    expect(cartValueChange).toBeInTheDocument();

    // Total length of the foodItems is 5 of accordition and 1 of cart
    expect(getAllByTestId("foodItems").length).toBe(6);

    // click on clear cart of the cart section
    fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}));

    // After clear cart we have only got the accordition value of 5 and 1 add + value will be removed
    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    // After Clicking the clear cart value it will show cart empty message
    expect(screen.getByText("Cart is empty. Add Items to your cart!")).toBeInTheDocument();
    
})