import React from "react";
import "./about.css";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import tire from "./Asgaard sofa 3.png";
import tire2 from "./Maya sofa three seater (1) 1.png";
import tire3 from "./Outdoor sofa set_2 1.png";
import tire4 from "./Stuart sofa 1.png";
import Aboutsmallinfo from "../../componets/aboutsmallinfo/Aboutsmallinfo";
import Aboutproductsdetails from "../../componets/aboutproductsdetails/Aboutproductsdetails";

const About = () => {

  return (
    <div className="absolute">
      <Header />
      <div className="about-container">
        <div className="about-links">
          <Link to="/">Home </Link>
          <RiArrowRightSLine className="arrow-right" />
          <Link to="/shop">Shop</Link>
          <RiArrowRightSLine className="arrow-right" />
          <div></div>
          <Link to="/about">Tire</Link>
        </div>

        <div className="about-card">
          <div className="about-left-images">
            <div className="about-left-mini-images">
              <div>
                <img src={tire} alt=""></img>
              </div>
              <div>
                <img src={tire3} alt=""></img>
              </div>
              <div>
                <img src={tire4} alt=""></img>
              </div>
              <div>
                <img src={tire2} alt=""></img>
              </div>
            </div>
            <div className="right-img-div">
              <img src={tire} alt=""></img>
            </div>
          </div>

          <div className="about-right-text">
            <h1>MIRAGE MR-AT172 285/65 </h1>
            <h3>Rs. 50,000.00 </h3>
            <div>
              {" "}
              <p>Shope: Tire House</p> <div></div>{" "}
              <span>5 Customer Review</span>
            </div>
            <p>
              The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an
              advanced tread pattern and compound which offer a long tread
              life.It employs a variable pitch tread design. This variable pitch
              design significantly reduces noise and provides a quiet ride. Its
              optimized profile provides even wear and classic style.
            </p>
            <h4>Size</h4>
            <div className="about-right-buttons">
              <button>17</button>
              <button>21</button>
              <button>24</button>
            </div>
            <h5>Color</h5>
            <div className="about-right-color-div"></div>
            <div className="about-right-add-div">
              <div class="counter-container">
                <button id="decrement">-</button>
                <span id="counter">1</span>
                <button id="increment">+</button>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Aboutsmallinfo />
      <Aboutproductsdetails />
      <Footer />
    </div>
  );
};

export default About;
