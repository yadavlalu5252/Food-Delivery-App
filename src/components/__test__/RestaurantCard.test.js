import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"

test("Should render Restaurant card Copmonent with prop data",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <RestaurantCard resData={MOCK_DATA}/>
    </Provider>
    </BrowserRouter>
)
    const RestaurantCartName = screen.getByText("The Good Bowl");
    expect(RestaurantCartName).toBeInTheDocument();

})