import { render,act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test("Should Search the card as per input and given output accroding to that", async()=>{
    await act(async() =>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    )
    );
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const searchButton = screen.getByRole("button", {name: "Search"});
    
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "ice-creame"}});

    fireEvent.click(searchButton);

    const cardAfterSearch = screen.getAllByTestId("resCard");

    expect(cardAfterSearch.length).toBe(8);
});

test("Should filter Top Rated restaurant", async()=> {
    await act( async()=>
     render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    );

    const cardBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardBeforeFilter.length).toBe(8);

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedButton);

    const cardAfterFilter = screen.getAllByTestId("resCard");

    expect(cardAfterFilter.length).toBe(8);

   
})