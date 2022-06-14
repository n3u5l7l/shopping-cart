import { ReactComponent as CartLogo } from "../assets/cart-outline.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;
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
  & > .before {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid;
    border-radius: 50%;
    top: 50%;
    background-color: white;
    font-size: 15px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Header({ shoppingCart, changeCartStatus }) {
  function changes(e) {
    e.preventDefault();
    changeCartStatus();
  }
  const content = (
    <header className="nav-bar">
      <div className="title">NutShopy</div>
      <div className="links-container">
        <nav className="links">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/shop">Shop</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink onClick={changes} to="/cart">
            {shoppingCart.totalItem > 0 && (
              <div className="before">{shoppingCart.totalItem}</div>
            )}
            <CartLogo />
          </StyledLink>
        </nav>
      </div>
    </header>
  );

  return content;
}

export default Header;
