import React from "react";
import { Button } from "rsuite";

function SushiItem({ sushi, setCart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
      }}
    >
      <div>
        <strong>{sushi.name}</strong> {sushi.price}
        <br />
        {sushi.attributes.map((a) => a + ", ")}
        <br />
        <br />
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Button
          color="blue"
          onClick={() => setCart((cart) => [...cart, sushi])}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default SushiItem;
