import {
    BrowserRouter,
    Routes,
    Route,
    useSearchParams,
  } from "react-router-dom";
  import Navigation from "../Header";
  import Cart from "../Cart";
  import AnimatePresence from "./AnimatePresence";
  import { useEffect, useState } from "react";
  
  const RouterSwitcher = () => {
    const [shoppingCart, setShoppingCart] = useState({
      totalCost: 0,
      totalItem: 0,
    });
    const [showCart, setShowCart] = useState(false);
  
    function changeCartStatus() {
      setShowCart((showCart) => !showCart);
    }
  
    function dontCloseCart(e) {
      e.stopPropagation();
    }

    const updateCart = (nutType, nutCost, nutImg) => {
      setShoppingCart((prevState) =>
        Object.assign(
          {},
          prevState,
          prevState[nutType] && prevState[nutType].amount >= 0
            ? {
                [nutType]: {
                  ...prevState[nutType],
                  amount: Number(prevState[nutType].amount) + 1,
                  total:
                    Number(prevState[nutType].amount) *
                    Number(prevState[nutType].cost),
                },
                totalCost: prevState["totalCost"] + nutCost,
                totalItem: prevState["totalItem"] + 1,
              }
            : {
                [nutType]: { amount: 1, cost: nutCost, image: nutImg },
                totalCost: prevState.totalCost
                  ? prevState.totalCost + nutCost
                  : nutCost,
                totalItem: prevState.totalItem ? prevState.totalItem + 1 : 1,
              }
        )
      );
    };
  
    return (
      <BrowserRouter>
        <Navigation
          shoppingCart={shoppingCart}
          changeCartStatus={changeCartStatus}
        />
        <AnimatePresence updateCart={updateCart} />
        <Cart
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          showCart={showCart}
          changeCartStatus={changeCartStatus}
          dontCloseCart={dontCloseCart}
        />
      </BrowserRouter>
    );
  };
  
  export default RouterSwitcher;