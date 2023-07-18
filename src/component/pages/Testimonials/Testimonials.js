import React from "react";
import "./Testimonials.css";
import { Carousel } from "react-bootstrap";
import person1 from "../../images/1.jpg";
import person2 from "../../images/2.jpg";

const Testimonials = ({Reviewref}) => {
  return (
    <div className="Testimonials " ref={Reviewref}>
      <h1>Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <div className="d-block slide">
            <div className="container content">
              <img src={person1} alt="" />
              <h6>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.
              </h6>
              <h5>Simab Dave - Web Designer</h5>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-block slide">
            <div className="container content">
              <img src={person2} alt="" />
              <h6>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live.
              </h6>
              <h5>Johnthan Doe - UX-Designer</h5>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
