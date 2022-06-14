import { motion } from "framer-motion";
import styled from "styled-components";

const StyledButton = styled("button")`
    border:1px solid gray;
    background-color: white;
    color:black;
    font-weight:bolder;
    opacity: 0.7;
    transition: opacity 0.3s linear, transform 0.3s linear;
    &:hover{
      opacity:1;
      transform: scale(1.1);
    }
`;


function NonEmptyCart({ dontCloseCart, content, totalPrize, changeCartStatus }) {

  const checkingOut = (e) => {alert("Thanks for purchasing")};

  return (
    <motion.div
      initial={{ x: window.innerWidth, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
      exit={{
        x: window.innerWidth,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      className="cart"
      onClick={dontCloseCart}
    >
      <div className="cart-title">Shopping Cart</div>
      <div className="cart-items">{content}</div>
      <div className="cart-total-cost">Total Cost: {totalPrize}</div>
      <StyledButton className="cart-checkout" onClick={checkingOut}>Checkout</StyledButton>
      <StyledButton className="cart-exit" onClick={changeCartStatus}>Exit</StyledButton>
    </motion.div>
  );
}

export default NonEmptyCart;
