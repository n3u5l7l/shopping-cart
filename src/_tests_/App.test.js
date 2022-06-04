import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

/* jest.mock("../components/Header.js", () => () =>{
  return(
    <div className='mockTest'>Testing</div>
  )
});
 */

afterEach(cleanup);

it("has welcome text", () => {
  render(<App />);
  expect(screen.getByText("Top selling", {exact: false})).toBeInTheDocument();
});

it("has nutrition info", () => {
  render(<App />);
  expect(screen.getByText("Our nuts provide", {exact: false})).toBeInTheDocument();
});

it("has button to shop", () => {
  render(<App/ >);
  expect(screen.getByRole("button").textContent).toMatch(/VISIT THE SHOP NOW/)
});