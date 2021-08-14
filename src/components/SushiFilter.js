import React, { useState } from "react";
import { Button } from "rsuite";
import SushiList from "./SushiList";
import CartModal from "./CartModal";
import SushiDrawer from "./SushiDrawer";

function SushiFilter() {
  const [filter, setFilter] = useState({});
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 400 }}>
        <Button onClick={() => setDrawerOpen(true)}>Drawer</Button>
        <Button onClick={() => setCartVisible(true)}>
          Cart ({cart.length})
        </Button>
        <CartModal
          cartVisible={cartVisible}
          setCartVisible={setCartVisible}
          cart={cart}
          setCart={setCart}
        />
        <SushiDrawer
          filter={filter}
          setFilter={setFilter}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
        <SushiList filter={filter} setCart={setCart} />
      </div>
    </div>
  );
}

export default SushiFilter;
