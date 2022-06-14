import styled from "styled-components";

const StyledButton = styled("button")`
    border:1px solid gray;
    background-color: white;
    color:black;
    font-weight:bolder;
`;

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
            <StyledButton
              className="decrement"
              onClick={(e) => {
                minusNuts(nut, cartItems[nut].cost);
              }}
            >
              -
            </StyledButton>
            <input
              type="text"
              onKeyDown={(e) => inputAmount(e, nut, cartItems[nut].cost)}
              onBlur={(e) => changeNutAmount(e, nut, cartItems[nut].cost)}
              defaultValue={cartItems[nut].amount}
            />
            <StyledButton
              className="increment"
              onClick={(e) => {
                addNuts(nut, cartItems[nut].cost);
              }}
            >
              +
            </StyledButton>
          </div>
        </div>
      </>
    );
  }
  
  export default CartItemInfo;