import {Card } from "react-bootstrap";
import "./Explorer.css";
import Data from "./data";
import ModalOrder from "../../Modals/ModalOrder";

const Explorer = ({ forwardref }) => {
  return (
    <>
      <section className="Explorer" ref={forwardref}>
        <div className="container">
          <h1>Explore Our Foods</h1>
          <p className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
          <div className="row ">
            {Data.map((item) => {
              return (
                <Card style={{ width: "18rem" }} className="col-lg-4 p-0 card">
                  <Card.Img variant="top" src={item.image} className="image" />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {item.Title}
                    </Card.Title>
                    <Card.Text className="cardText">
                      <p>{item.text}</p>
                      <h3>
                        {item.price} <span>{item.offer}</span>
                      </h3>
                    </Card.Text>
                    <hr />
                    <ModalOrder />
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Explorer;
