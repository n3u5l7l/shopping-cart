import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import uniqid from "uniqid"; 
import "../styles/Cart.css";
import {ReactComponent as EmptyLogo} from "../assets/briefcase-outline.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    position: relative;
    text-decoration: none;
    color:black;
    font-size: 20px;
    font-weight:bolder;
    align-self:center;
    flex:1;
    &::after{
        content: "";
        display:block;
        border-bottom: 1px solid;
        transform: scaleX(0);
        transition: transform 0.2s ease-in-out;
        }
    &:hover::after{
            transform: scaleX(1);
        }
`

function Cart ({shoppingCart: cartItems, showCart, dontCloseCart, changeCartStatus, setShoppingCart}) {
    let totalPrize = cartItems.totalCost;
    function addNuts(nutType, nutCost){
        setShoppingCart((prevCart) => {
          return  {...prevCart, [nutType]: {...prevCart[nutType], amount: Number(prevCart[nutType].amount)+1, total: (Number(prevCart[nutType].amount)+1) * Number(prevCart[nutType].cost)}, totalCost: prevCart["totalCost"] + nutCost, totalItem: prevCart["totalItem"] + 1}
        })
    }

    function minusNuts(nutType, nutCost){
        setShoppingCart((prevCart) => {
            return  {...prevCart, [nutType]: {...prevCart[nutType], amount: Number(prevCart[nutType].amount)-1, total: (Number(prevCart[nutType].amount)+1) * Number(prevCart[nutType].cost)}, totalCost: prevCart["totalCost"] - nutCost,  totalItem: prevCart["totalItem"] - 1}
          })
    }

    function linkClick(e){
        changeCartStatus();
    }

    let content = Object.keys(cartItems).length > 2 ? Object.keys(cartItems).map((nut => {
        if(nut==="totalCost" || nut==="totalItem"){return;}
        if(cartItems[nut].amount===0){
            return;
        }
        return (
            <div className="cart-item" key={uniqid()}>
                <img src={cartItems[nut].image} alt={nut}></img>
                <div className="cart-item-info">
                    <div className="nut-name">{nut}</div>
                    <div className="nut-cost">{cartItems[nut].cost}</div>
                    <div className="nut-amount">
                        <button className="decrement" onClick={(e) => {minusNuts(nut, cartItems[nut].cost)}}>-</button>
                        <input type="text" value={cartItems[nut].amount}/>
                        <button className="increment" onClick={(e) => {addNuts(nut, cartItems[nut].cost)}}>+</button>
                    </div>
                </div>
            </div>
        )
    })): null;
    content = content !== null ? content.filter((element) => element): null;
    console.log(content);
    let container = content && content.length > 0 ? (
        <motion.div initial={{x: window.innerWidth, opacity:0}} animate={{x:0, opacity:1, transition:{delay: 0.3}}} exit={{x:window.innerWidth, opacity:0, transition:{duration:0.2}}} className="cart" onClick={dontCloseCart}>
            <div className="cart-title">Shopping Cart</div>
            <div className="cart-items">
                {content}
            </div>
            <div className="cart-total-cost">Total Cost: {totalPrize}</div>
            <button className="cart-checkout">Checkout</button>
            <button className="cart-exit">Exit</button>
        </motion.div>): 
        <motion.div initial={{x: window.innerWidth, opacity:0}} animate={{x:0, opacity:1, transition:{delay: 0.3}}} exit={{x:window.innerWidth, opacity:0, transition:{duration:0.2}}} className="cart" onClick={dontCloseCart}>
            <div className="cart-title">Shopping Cart</div>
            <div className="empty-logo-container">
                <EmptyLogo />
                <div className="empty-title">Empty Cart</div>
            </div>
            <StyledLink to="/shop" onClick={linkClick}>Visit Shop</StyledLink>
        </motion.div>;


    return(
        <AnimatePresence exitBeforeEnter>
        ({showCart && <motion.div key="cart-container" initial={{x: -window.innerWidth}} animate={{x: 0, transition:{duration: 0.3}}} exit={{x: -window.innerWidth, transition: {delay: 0.2}}} className="cart-container" onClick={changeCartStatus}>
                {container}
            </motion.div>})
        </AnimatePresence>
    )
}

export default Cart;