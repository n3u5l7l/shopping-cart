import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Header from "../components/Header";

afterEach(cleanup);

it("has website title", () => {
    render(<MemoryRouter>
        <Header/>
    </MemoryRouter>);
    
    const title = screen.getByText("NutShopy");
    expect(title).toHaveClass("title");
})

it("has navigation", () => {
    render(<MemoryRouter>
        <Header/>
    </MemoryRouter>);

    const navigation = screen.getByRole("navigation");
    expect(navigation).toHaveClass("links");
});

it("has four links in navigation", () => {
    render(<MemoryRouter>
        <Header/>
    </MemoryRouter>);

    expect(screen.getAllByRole("link")).toHaveLength(4);
});