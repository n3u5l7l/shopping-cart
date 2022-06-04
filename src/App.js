import "./App.css";
import {ReactComponent as LeftArrowLogo} from "./assets/chevron-left.svg";
import {ReactComponent as RightArrowLogo} from "./assets/chevron-right.svg";


function App() {
  return (
    <div className="main">
      <div className="welcome-text">Top selling nut shop of the year!</div>
      <div className="nutrition-text">
        Our nuts provide you with vast amounts of vitamins/minears 
        that you need in your daily life
      </div>
      <div className="shop-button-container">
        <RightArrowLogo className="svgRight"/>
        <button className="shop-button">VISIT THE SHOP NOW</button>
        <LeftArrowLogo className="svgLeft"/>
      </div>
    </div>
  );
}

export default App;
