import "./App.css";
import { ReactComponent as LeftArrowLogo } from "./assets/chevron-left.svg";
import { ReactComponent as RightArrowLogo } from "./assets/chevron-right.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLink = styled(Link)`
  border: none;
  padding: 1rem;
  color: black;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

function App() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 1, transition: { duration: 0.3 } }}
      className="main"
    >
      <div className="welcome-text">Top selling nut shop of the year!</div>
      <div className="nutrition-text">
        Our nuts provide you with vast amounts of vitamins/minears that you need
        in your daily life
      </div>
      <div className="shop-button-container">
        <RightArrowLogo className="svgRight" />
        <StyledLink to="/shop" className="shop-button">
          VISIT THE SHOP NOW
        </StyledLink>
        <LeftArrowLogo className="svgLeft" />
      </div>
    </motion.div>
  );
}

export default App;
