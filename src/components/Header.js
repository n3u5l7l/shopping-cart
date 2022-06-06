
import { ReactComponent as CartLogo } from "../assets/cart-outline.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import styled from "styled-components";

const StyledLink = styled(Link)`
    position: relative;
    text-decoration: none;
    color:white;
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

function Header () {
    const content = (
        <header className="nav-bar">
            <div className="title">NutShopy</div>
            <div className="links-container">
                <nav className="links">
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to ="/shop">Shop</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                    <StyledLink to="/cart"><CartLogo/></StyledLink>
                </nav>
            </div>
        </header>
    )

    return content;
}

export default Header;
