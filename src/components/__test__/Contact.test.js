import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// Describe means simply group similar type of test cases in a single group
describe("Contact us page Test cases", ()=> {
    test("Should load Contact us component", ()=> {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("Should load Button on the Contact us Component", ()=> {
    render(<Contact/>);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test("Should load input name on the Contact Component",()=>{
    render(<Contact/>);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
});

test("Should load all the input boxe present in the Contact Component", ()=> {
    render(<Contact/>);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
});
})