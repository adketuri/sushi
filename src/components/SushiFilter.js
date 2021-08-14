import React, { useState } from "react";
import { Button } from "rsuite";
import SushiList from "./SushiList";
import CartModal from "./CartModal";
import SushiDrawer from "./SushiDrawer";
import Content from "./Content";
import MenuBar from "./MenuBar";
import DataValidator from "./DataValidator";

function SushiFilter() {
  const [filter, setFilter] = useState({});
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <>
      <MenuBar>
        <Button onClick={() => setDrawerOpen(true)}>Drawer</Button>
        <Button onClick={() => setCartVisible(true)}>
          Cart ({cart.length})
        </Button>
      </MenuBar>
      {/* <DataValidator /> */}
      <Content>
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
      </Content>
    </>
  );
}

export default SushiFilter;
