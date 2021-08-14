import React from "react";
import { Modal, Button } from "rsuite";

function CartModal({ cartVisible, setCartVisible, cartItems }) {
  return (
    <Modal show={cartVisible} onHide={() => setCartVisible(false)} size={"xs"}>
      <Modal.Header>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>Hullo</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => console.log("RESET")} appearance="subtle">
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
