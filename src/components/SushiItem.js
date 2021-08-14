import React from "react";
import { Button } from "rsuite";

function handleClick(remove, sushi, setCart) {
  if (remove) {
    setCart((cart) => {
      const idx = cart.indexOf(sushi);
      if (idx !== -1) return cart.filter((_, iidx) => iidx !== idx);
      return cart;
    });
  } else {
    setCart((cart) => [...cart, sushi]);
  }
}

function SushiItem({ sushi, setCart, remove }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
      }}
    >
      <div>
        <strong>{sushi.name}</strong> {sushi.price}
        <br />
        <small style={{ color: "gray" }}>
          {sushi.attributes.map((a, i) => (i !== 0 ? ", " + a : a))}
        </small>
        <br />
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Button
          color={remove ? "red" : "blue"}
          onClick={() => handleClick(remove, sushi, setCart)}
        >
          {remove ? "X" : "+"}
        </Button>
      </div>
    </div>
  );
}

export default SushiItem;
