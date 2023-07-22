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
          <div className="row ">
            <form>
              <input
                className="col-6 me-3"
                type="text"
                placeholder="Your name"
              />
              <input
                className="col-5 ms-3 my-3"
                type="text"
                placeholder="Your Email "
              />
              <input
                className="col-12 "
                type="text"
                placeholder="Your  Adress"
              />
              <input
                className="col-12 my-3"
                type="number"
                placeholder="Zep Code"
              />
              <input
                className="col-12"
                type="number"
                placeholder="Mobile No."
              />
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
