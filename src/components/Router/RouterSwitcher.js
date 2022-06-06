import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import App from "../../App";
import Navigation from "../Header";
import AnimatePresence from "./AnimatePresence";

const RouterSwitcher = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <AnimatePresence />
        </BrowserRouter>
    )
}

export default RouterSwitcher;