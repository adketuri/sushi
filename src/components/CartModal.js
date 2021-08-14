import React from "react";
import { Modal, Button, Divider } from "rsuite";
import CartTotal from "./CartTotal";
import SushiItem from "./SushiItem";

function CartModal({ cartVisible, setCartVisible, cart, setCart }) {
  return (
    <Modal show={cartVisible} onHide={() => setCartVisible(false)} size="xs">
      <Modal.Header>
        <Modal.Title>My Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart && cart.length ? (
          <>
            {cart.map((sushi) => (
              <SushiItem sushi={sushi} setCart={setCart} remove />
            ))}
            <Divider />
            <CartTotal cart={cart} />
          </>
        ) : (
          <div>Nothing here. Add some sushi!</div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setCart([])} appearance="subtle">
          Reset
        </Button>
        <Button onClick={() => setCartVisible(false)} appearance="primary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
