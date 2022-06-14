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
                [nutType]: { amount: 1, cost: nutCost, image: nutImg, total: nutCost },
                totalCost: prevState.totalCost + Number(nutCost),
                totalItem: prevState.totalItem + 1
              }
        )
      );
    };
  
    function addNut(nutType, nutCost) {
      setShoppingCart((prevCart) => {
        return {
          ...prevCart,
          [nutType]: {
            ...prevCart[nutType],
            amount: Number(prevCart[nutType].amount) + 1,
            total:
              (Number(prevCart[nutType].amount) + 1) *
              Number(prevCart[nutType].cost),
          },
          totalCost: prevCart["totalCost"] + nutCost,
          totalItem: prevCart["totalItem"] + 1,
        };
      });
    }
  
    function minusNut(nutType, nutCost) {
      setShoppingCart((prevCart) => {
        return {
          ...prevCart,
          [nutType]: {
            ...prevCart[nutType],
            amount: Number(prevCart[nutType].amount) - 1,
            total:
              (Number(prevCart[nutType].amount) + 1) *
              Number(prevCart[nutType].cost),
          },
          totalCost: prevCart["totalCost"] - nutCost,
          totalItem: prevCart["totalItem"] - 1,
        };
      });
    }

    function changeNutAmount(event, nutType, nutCost){
      if(event.target.value === "" || isNaN(Number(event.target.value))){
        event.target.setCustomValidity("Please input a number");
        event.target.reportValidity();
        setTimeout(()=>{event.target.setCustomValidity("");}, 3000)
        return;
      }else{
        console.log( Number(event.target.value));
      setShoppingCart((prevCart) => {
        return {
          ...prevCart,
          [nutType]: {
            ...prevCart[nutType],
            amount: Number(event.target.value),
            total:
              Number(event.target.value) *
              Number(prevCart[nutType].cost),
          },
          totalCost: (prevCart["totalCost"] - prevCart[nutType].total) + Number(event.target.value) * Number(prevCart[nutType].cost),
          totalItem: (prevCart["totalItem"] - prevCart[nutType].amount) + Number(event.target.value),
        };
      });
    }
    }
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
          addNut={addNut}
          minusNut={minusNut}
          changeNutAmount={changeNutAmount}
        />
      </BrowserRouter>
    );
  };
  
  export default RouterSwitcher;