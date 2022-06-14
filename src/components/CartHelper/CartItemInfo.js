function CartItemInfo({ cartItems, nut, minusNuts, addNuts, changeNutAmount }) {
    const inputAmount = (e, nutType, nutCost) => {
      if (e.keyCode !== 13) {
        return;
      }
      changeNutAmount(e, nutType, nutCost);
    };
  
    return (
      <>
        <img src={cartItems[nut].image} alt={nut}></img>
        <div className="item-info">
          <div className="nut-name">{nut}</div>
          <div className="nut-cost">{cartItems[nut].cost}</div>
          <div className="nut-amount">
            <button
              className="decrement"
              onClick={(e) => {
                minusNuts(nut, cartItems[nut].cost);
              }}
            >
              -
            </button>
            <input
              type="text"
              onKeyDown={(e) => inputAmount(e, nut, cartItems[nut].cost)}
              onBlur={(e) => changeNutAmount(e, nut, cartItems[nut].cost)}
              defaultValue={cartItems[nut].amount}
            />
            <button
              className="increment"
              onClick={(e) => {
                addNuts(nut, cartItems[nut].cost);
              }}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
  
  export default CartItemInfo;