import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Shop from "../components/Shop";

afterEach(cleanup);

it("renders properly", () => {
    const {container} = render(<Shop />);

    expect(container).toMatchSnapshot();
});