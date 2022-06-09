import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Header from "../components/Header";

afterEach(cleanup);

it("has website title", () => {
    const shoppingCart = {totalItem: 0};

    render(<MemoryRouter>
        <Header shoppingCart={shoppingCart}/>
    </MemoryRouter>);
    
    const title = screen.getByText("NutShopy");
    expect(title).toHaveClass("title");
})

it("has navigation", () => {
    const shoppingCart = {totalItem: 0};

    render(<MemoryRouter>
        <Header shoppingCart={shoppingCart}/>
    </MemoryRouter>);

    const navigation = screen.getByRole("navigation");
    expect(navigation).toHaveClass("links");
});

it("has four links in navigation", () => {
    const shoppingCart = {totalItem: 0};

    render(<MemoryRouter>
        <Header shoppingCart={shoppingCart}/>
    </MemoryRouter>);

    expect(screen.getAllByRole("link")).toHaveLength(4);
});

test("number displayed on cart when there's item's in cart", () => {
    const shoppingCart = {totalItem: 1};

    render(<MemoryRouter>
        <Header shoppingCart={shoppingCart}/>
    </MemoryRouter>);

    expect(screen.getByText(/1/)).toBeInTheDocument();

})