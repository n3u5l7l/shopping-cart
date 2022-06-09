import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { ReactComponent as EmptyLogo } from "../../assets/briefcase-outline.svg";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bolder;
  align-self: center;
  flex: 1;
  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

function EmptyCart({dontCloseCart, linkClick}){
    return(
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
        <div className="empty-logo-container">
          <EmptyLogo />
          <div className="empty-title">Empty Cart</div>
        </div>
        <StyledLink to="/shop" onClick={linkClick}>
          Visit Shop
        </StyledLink>
      </motion.div>
    )
}

export default EmptyCart;