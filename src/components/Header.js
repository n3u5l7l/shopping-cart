
import { ReactComponent as CartLogo } from "../assets/cart-outline.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header () {
    const content = (
        <header className="nav-bar">
            <div className="title">NutShopy</div>
            <div className="links-container">
                <nav className="links">
                    <Link to="/">Home</Link>
                    <Link to ="/shop">Shop</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart"><CartLogo/></Link>
                </nav>
            </div>
        </header>
    )

    return content;
}

export default Header;
