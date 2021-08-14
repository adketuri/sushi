import React from "react";
import { Modal, Button } from "rsuite";
import SushiItem from "./SushiItem";

function CartModal({ cartVisible, setCartVisible, cart, setCart }) {
  return (
    <Modal show={cartVisible} onHide={() => setCartVisible(false)} size="xs">
      <Modal.Header>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart &&
          cart.map((sushi) => <SushiItem sushi={sushi} setCart={setCart} />)}
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
