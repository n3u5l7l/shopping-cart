import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
import React from "react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

jest.mock("../components/CartHelper/EmptyCart.js", () => ({dontCloseCart}) =>{
    return(
      <div onClick={dontCloseCart} className='empty'>Empty</div>
    )
});

jest.mock("../components/CartHelper/NonEmptyCart.js", () => ({dontCloseCart, content}) =>{
    return(
        <div>
            {content}
            <div onClick={dontCloseCart} className='non-empty'>Non-Empty</div>
        </div>
    )
});

jest.mock("../components/CartHelper/CartItemInfo.js", () => ({addNuts : increment, minusNuts : decrement, changeNutAmount}) =>{
    return(
        <div>
            <button onClick={decrement}>-</button>
            <div className='non-empty'>Cart Item</div>
            <input type="text" onBlur={changeNutAmount}></input>
            <button onClick={increment}>+</button>
        </div>
    )
});


it("renders empty cart when no items", () => {
    const shoppingCart = {};
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart}/>);
    
    expect(screen.getByText(/Empty/)).toBeInTheDocument();

});

it("renders non-empty cart when there's item in cart", () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart}/>);
    
    expect(screen.getByText(/Non-Empty/)).toBeInTheDocument();
})

test("dont close cart event fired when clicked inside a cart that's not empty",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const dontCloseCart = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} dontCloseCart={dontCloseCart}/>);
    
    userEvent.click(screen.getByText(/Non-Empty/));
    expect(dontCloseCart).toHaveBeenCalledTimes(1);
});

test("dont close cart event fired when clicked inside a cart that's empty",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const dontCloseCart = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} dontCloseCart={dontCloseCart}/>);
    
    userEvent.click(screen.getByText(/Empty/));
    expect(dontCloseCart).toHaveBeenCalledTimes(1);
});

test("if visit shop link work",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const changeCartStatus = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} changeCartStatus={changeCartStatus}/>);
    
    userEvent.click(screen.getByText(/Empty/));
    expect(changeCartStatus).toHaveBeenCalledTimes(1);
});

test("if click outside of cart triggers event",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const changeCartStatus = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} changeCartStatus={changeCartStatus}/>);
    
    userEvent.click(screen.getByTestId(/outside-cart/));
    expect(changeCartStatus).toHaveBeenCalledTimes(1);
});

test("if increment button works",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const adding = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} addNut={adding}/>);

    userEvent.click(screen.getByRole("button", { name: /\+/ }));

    expect(adding).toHaveBeenCalledTimes(1);
});

test("if decrement button works",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const decrement = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} minusNut={decrement}/>);

    userEvent.click(screen.getByRole("button", {name: /\-/}));

    expect(decrement).toHaveBeenCalledTimes(1);
});

test("if change input works when lose focus",  () => {
    const shoppingCart = {totalItem: 1, totalCost: "$15.99", ALmonds: true};
    const changeNutAmount = jest.fn();
    const showCart = true;
    render(<Cart shoppingCart={shoppingCart} showCart={showCart} changeNutAmount={changeNutAmount}/>);

    userEvent.type(screen.getByRole("textbox"), "1");
    userEvent.click(screen.getByText("Cart Item"));

    expect(changeNutAmount).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("textbox")).toHaveValue("1");
});
