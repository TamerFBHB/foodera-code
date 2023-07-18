import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container height">
        <h1>
          Hurry up! Subscribe our newsletter <br /> and get 25% Off
        </h1>
        <p>Limited time offer for this month. No credit card required.</p>
        <form>
          <input type="Email" placeholder="Email Adress here" />
          <Button>Subscribe</Button>
        </form>
      </div>
      <div className="enFooter">
        <div className="Social">
        <i className="fab fa-facebook-f"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-dribbble"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-instagram"></i>
        </div>
        <p>© 2021. Foodera. All rights reserved.</p>
      </div>
      
    </section>
  );
};

export default Footer;
