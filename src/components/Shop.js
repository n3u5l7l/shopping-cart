import "../styles/Shop.css";
import { motion, AnimatePresence } from "framer-motion";
import CashewPic from "../assets/cashew-nuts.jpeg";
import AlmondPic from "../assets/Almond.jpeg";
import WalnutPic from "../assets/Walnut.jpeg";
import PecanPic from "../assets/Pecans.jpeg";
import PistachiosPic from "../assets/Pistachios.jpeg";
import HazlenutPic from "../assets/Hazelnut.jpeg";
import MacadamiaNutPic from "../assets/Macadamia-nut.jpeg";
import PeanutPic from "../assets/peanut.jpeg";
import BrazilNutPic from "../assets/Brazil-nut.jpeg";

function Shop({ handleShoppingCart: setShoppingCart }) {
  const NutInfos = [
    {
      image: CashewPic,
      type: "Cashew nuts",
      cost: "15.99",
    },
    {
      image: AlmondPic,
      type: "Almonds",
      cost: "25.99",
    },
    {
      image: WalnutPic,
      type: "Walnuts",
      cost: "14.99",
    },
    {
      image: PecanPic,
      type: "Pecans",
      cost: "14.99",
    },
    {
      image: PistachiosPic,
      type: "Pistachios",
      cost: "20.99",
    },
    {
      image: HazlenutPic,
      type: "Hazelnuts",
      cost: "18.99",
    },
    {
      image: BrazilNutPic,
      type: "Brazil nuts",
      cost: "15.99",
    },
    {
      image: MacadamiaNutPic,
      type: "Macadamia nuts",
      cost: "10.99",
    },
    {
      image: PeanutPic,
      type: "Peanuts",
      cost: "17.99",
    },
  ];

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
              [nutType]: { amount: 1, cost: nutCost, image: nutImg },
              totalCost: prevState.totalCost
                ? prevState.totalCost + nutCost
                : nutCost,
              totalItem: prevState.totalItem ? prevState.totalItem + 1 : 1,
            }
      )
    );
    console.log("LoL");
  };
  let content = NutInfos.map((nut, index) => {
    return (
      <div className="item-container" key={index}>
        <img src={nut.image} alt={nut.type + " pic"} />
        <div className="item-info">
          <div className="nut-type">{nut.type}</div>
          <div className="nut-cost">${nut.cost}</div>
          <button
            onClick={() => updateCart(nut.type, Number(nut.cost), nut.image)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <motion.div
      className="shop-container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 1, transition: { duration: 0.3 } }}
    >
      <div className="shop-title">Nut Collection</div>
      <div className="all-item-container">{content}</div>
    </motion.div>
  );
}

export default Shop;