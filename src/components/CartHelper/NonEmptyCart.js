import { motion } from "framer-motion";

function NonEmptyCart({ dontCloseCart, content, totalPrize }) {
  return (
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
      <div className="cart-items">{content}</div>
      <div className="cart-total-cost">Total Cost: {totalPrize}</div>
      <button className="cart-checkout">Checkout</button>
      <button className="cart-exit">Exit</button>
    </motion.div>
  );
}

export default NonEmptyCart;
