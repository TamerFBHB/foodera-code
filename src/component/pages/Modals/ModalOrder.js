import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalOrder.css";
import { Form } from "react-bootstrap";

function ModalOrder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn" onClick={handleShow}>
        Order Now
        <i className="bi bi-basket2-fill ms-2"></i>
      </button>

      <Modal className="main" show={show} onHide={handleClose}>
        <Modal.Header className="header" closeButton>
          <Modal.Title className="titleModal mb-3 mx-auto">
            Make Your Order Now!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form className="main-modal ">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Your Email " />
              <input type="text" placeholder="Your  Adress" />
              <div className="info">
                <input type="number" placeholder="Zep Code" />
                <input type="number" placeholder="Mobile No." />
              </div>
              <Form.Select className="my-3 dropItems">
                <option>Rainbow Vegetable Sandwich $10.50</option>
                <option>Vegetarian Burger $9.20</option>
                <option>Raspberry Stuffed French Toast $12.20</option>
              </Form.Select>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer">
          <Button onClick={handleClose}>
            Send Message
            <i className="bi bi-send ms-2"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOrder;
