import React from "react";
import AttributeSelector from "./AttributeSelector";
import { Drawer } from "rsuite";

function SushiDrawer({ filter, setFilter, drawerOpen, setDrawerOpen }) {
  return (
    <Drawer
      size="xs"
      show={drawerOpen}
      onHide={() => setDrawerOpen(false)}
      style={{ width: 250 }}
    >
      <Drawer.Header>
        <Drawer.Title>Options</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <AttributeSelector
          onChange={(v, checked) => {
            if (checked) {
              setFilter({ ...filter, [v]: true });
            } else {
              const { [v]: value, ...rest } = filter;
              setFilter(rest);
            }
          }}
          initialFilter={filter}
        />
      </Drawer.Body>
      <Drawer.Footer />
    </Drawer>
  );
}

export default SushiDrawer;
