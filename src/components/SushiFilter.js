import React, { useState } from "react";
import { Button } from "rsuite";
import SushiList from "./SushiList";
import CartModal from "./CartModal";
import SushiDrawer from "./SushiDrawer";

function SushiFilter() {
  const [filter, setFilter] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setDrawerOpen(true)}>Drawer</Button>
      <Button onClick={() => setCartVisible(true)}>Cart</Button>
      <CartModal cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <SushiDrawer
        filter={filter}
        setFilter={setFilter}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <SushiList filter={filter} />
    </>
  );
}

export default SushiFilter;
