import React from "react";

const CartTotalRow = ({ left, right }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>{left}</div>
      <div style={{ marginLeft: "auto" }}>{right}</div>
    </div>
  );
};

function CartTotal({ cart }) {
  const total = cart.reduce((a, c) => a + c.price, 0);
  return (
    <>
      <CartTotalRow left="Total" right={total} />
      <CartTotalRow
        left="With Tax & 15% Tip"
        right={Math.floor(total * 1.0875 * 1.15)}
      />
    </>
  );
}

export default CartTotal;
