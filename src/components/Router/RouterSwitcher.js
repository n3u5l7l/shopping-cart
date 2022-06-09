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
  
    return (
      <BrowserRouter>
        <Navigation
          shoppingCart={shoppingCart}
          changeCartStatus={changeCartStatus}
        />
        <AnimatePresence handleShoppingCart={setShoppingCart} />
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