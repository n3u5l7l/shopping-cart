import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import uniqid from "uniqid";
import "../styles/Cart.css";
import styled from "styled-components";
import NonEmptyCart from "./CartHelper/NonEmptyCart";
import EmptyCart from "./CartHelper/EmptyCart";
import CartItemInfo from "./CartHelper/CartItemInfo";
function Cart({
  shoppingCart: cartItems,
  showCart,
  dontCloseCart,
  changeCartStatus,
  setShoppingCart,
  addNut,
  minusNut,
  changeNutAmount
}) {
  let totalPrize = cartItems.totalCost;
  function addNuts(nutType, nutCost) {
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

  function minusNuts(nutType, nutCost) {
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

  function linkClick(e) {
    changeCartStatus();
  }

  let content =
    Object.keys(cartItems).length > 2
      ? Object.keys(cartItems).map((nut) => {
          if (
            nut === "totalCost" ||
            nut === "totalItem" ||
            cartItems[nut].amount === 0
          ) {
            return;
          }
          return (
            <div className="cart-item" key={uniqid()}>
             <CartItemInfo cartItems={cartItems} nut={nut} minusNuts={minusNut} addNuts={addNut} changeNutAmount={changeNutAmount} />
            </div>
          );
        })
      : null;
  content = content !== null ? content.filter((element) => element) : null;
  let container =
    content && content.length > 0 ? (
      <NonEmptyCart
        dontCloseCart={dontCloseCart}
        content={content}
        totalPrize={totalPrize}
      />
    ) : (
      <EmptyCart dontCloseCart={dontCloseCart} linkClick={linkClick} />
    );

  return (
    <AnimatePresence exitBeforeEnter>
      (
      {showCart && (
        <motion.div
          key="cart-container"
          initial={{ x: -window.innerWidth }}
          animate={{ x: 0, transition: { duration: 0.3 } }}
          exit={{ x: -window.innerWidth, transition: { delay: 0.2 } }}
          className="cart-container"
          onClick={changeCartStatus}
          data-testid="outside-cart"
        >
          {container}
        </motion.div>
      )}
      )
    </AnimatePresence>
  );
}

export default Cart;