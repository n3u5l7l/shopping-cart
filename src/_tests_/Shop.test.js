import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../components/Shop";
import React from "react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

it("renders properly", () => {
    const {container} = render(<Shop />);

    expect(container).toMatchSnapshot();
});

it("renders all shop item button", async () => {
    render(<Shop />);
    const allButtons = screen.getAllByRole('button');

    expect(allButtons).toHaveLength(allButtons.length);
});

it("renders all images", () => {
    render(<Shop />);
    
    const allImages = screen.getAllByRole("img");

    expect(allImages).toHaveLength(allImages.length);
});

test("all buttons can be clicked on shop items", async () => {
    const updateCartMock = jest.fn();
    render(<Shop updateCart = {updateCartMock}/>);
    const allButtons = screen.getAllByRole('button');

    for(let i = 0; i < allButtons.length; i++){
        await userEvent.click(allButtons[i]);
    }

    expect(updateCartMock).toHaveBeenCalledTimes(allButtons.length);
});



