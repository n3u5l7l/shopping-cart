import { Routes, Route, useLocation } from "react-router-dom";
import App from "../../App";
import Shop from "../Shop";
import Contact from "../Contact";
import { AnimatePresence } from "framer-motion";
function AnimatePresences({ handleShoppingCart: setShoppingCart }) {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop handleShoppingCart={setShoppingCart} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatePresences;
