import { Routes, Route, useLocation } from "react-router-dom"
import App from "../../App";
import Shop from "../Shop";
import { AnimatePresence } from "framer-motion";
function AnimatePresences () {
    const location = useLocation();
    return(
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/contact" element={null} />
                <Route path="/cart" element={null} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatePresences;