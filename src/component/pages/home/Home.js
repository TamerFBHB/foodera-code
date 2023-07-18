import React, { useRef } from "react";
import Header from "./Header";
import "./home.css";
import photo1 from "../../images/one.png";
import photo2 from "../../images/two.png";
import Explorer from "../Explorer/Explorer";
import Testimonials from "../Testimonials/Testimonials";
import { Link } from "react-router-dom";
import Footer from "../Footter/Footer";

const Home = () => {
  // navigate to home
  const Home = useRef();
  // navigate to about
  const About = useRef();
  // navigate to explorer
  const EXplorer = useRef();
  // navigate to review
  const Review = useRef();

  return (
    <>
      {/* component Header */}
      <Header about={About} explorer={EXplorer} review={Review} home={Home} />
      <section className="numbers">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-lg-3 number text-center mt-3">
              <h1> 1287+</h1>
              <p>savings</p>
            </div>
            <div className="col-md-6 col-lg-3 number text-center mt-3">
              <h1>5786+</h1>
              <p>photos</p>
            </div>
            <div className="col-md-6 col-lg-3 number text-center mt-3">
              <h1>1440+</h1>
              <p>rockets</p>
            </div>
            <div className="col-md-6 col-lg-3 number text-center mt-3">
              <h1>7110+</h1>
              <p>globes</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={About} className="About">
        <div className="container">
          <div className="row justify-content-between align-items-center g-4">
            <div class="col-lg-7">
              <img src={photo1} alt="photo1" />
            </div>
            <div class="col-lg-5 ">
              <div>
                <h1>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <button className="btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="container ">
          <div className="row align-items-center ">
            <div className="col-lg-6 info">
              <h1>
                We make everything by hand with the best possible ingredients.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <div className="liFont">
                <i className="bi bi-check-lg me-3 "></i>
                Etiam sed dolor ac diam volutpat.
              </div>
              <div className="liFont">
                <i className="bi bi-check-lg me-3"></i>
                Erat volutpat aliquet imperdiet.
              </div>
              <div className="liFont">
                <i className="bi bi-check-lg me-3"></i>
                purus a odio finibus bibendum.
              </div>
              <button className="btn">Learn More</button>
            </div>

            <div className="col-lg-6">
              <img src={photo2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section  className="difference row">
        <div>
          <h1>
            When a man's stomach is full it makes no difference whether he is
            rich or poor.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus.
          </p>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <i class="bi bi-play-fill"></i>
            Watch Our Story
          </a>
        </div>
      </section>
      {/* component Explorer */}
      <Explorer forwardref={EXplorer} />
      {/* component Testimonials */}
      <Testimonials Reviewref={Review} />
      <section className="Questions">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="DETAILS">
            <div>
              <h4>
                <span>~</span> Is Foodera Bread really baked fresh each day?
              </h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
              <h4>
                <span>~</span> Can I order your products online?
              </h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>

            <div>
              <h4>
                <span>~</span> Is Foodera Bread really baked fresh each day?
              </h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
              <h4>
                <span>~</span> Can I order your products online?
              </h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* start parallax */}
      <section  className=" parallax text-center" >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Baked fresh daily by bakers with passion.</h2>
            </div>

            <div className="col-md-4">
              <Link className="btn btn-lg btn-primary pull-left">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* component Footer */}
      <Footer />
    </>
  );
};

export default Home;
