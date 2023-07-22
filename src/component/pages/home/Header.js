import React from "react";
import "./Header.css";
import NavHeader from "../navs/NavHeader";
import ModalOrder from "../../Modals/ModalOrder";

const Header = ({about,explorer,review,home}) => {
  return (
    <>
      <NavHeader aBout={about} explorer={explorer} Review ={review} Home ={home}/>
      <header>
        <div className="container " ref={home}>
          <div className="row  main">
            <div className="col-md-6  info">
              <h1 className="title">Good food choices are good investments.</h1>
              <p className="my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum amet leo.
              </p>
              <ModalOrder />
              <button className="btnLearn">
                Learn More
                <i className="bi bi-caret-right ms-2"></i>
              </button>
            </div>

            <div className=" col-md-6 "></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
