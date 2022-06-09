import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from "react-router-dom";
/* jest.mock("../components/Header.js", () => () =>{
  return(
    <div className='mockTest'>Testing</div>
  )
});
 */

afterEach(cleanup);

it("has welcome text", () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByText("Top selling", {exact: false})).toBeInTheDocument();
});

it("has nutrition info", () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByText("Our nuts provide", {exact: false})).toBeInTheDocument();
});

it("has button to shop", () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByRole("link").textContent).toMatch(/VISIT THE SHOP NOW/);
});